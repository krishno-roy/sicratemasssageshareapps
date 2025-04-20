const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://Krishno:Krishno@cluster0.kbretca.mongodb.net/secret-app",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Message Schema
const messageSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// ✅ Create Secret Message
app.post("/api/message", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const newMessage = new Message({ message });
    await newMessage.save();
    res.json({ id: newMessage._id });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ error: "Failed to create message" });
  }
});

// ✅ Get & Delete Secret Message (One-time view)
app.get("/api/message/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findById(id);

    if (!message) {
      return res
        .status(404)
        .json({ error: "This message has expired or doesn't exist." });
    }

    // ✅ Delete after reading
    await Message.findByIdAndDelete(id);

    res.json({ message: message.message });
  } catch (error) {
    console.error("Error retrieving message:", error);
    res.status(500).json({ error: "Failed to retrieve message" });
  }
});

app.listen(4000, () => {
  console.log("✅ Server is running on http://localhost:4000");
});
