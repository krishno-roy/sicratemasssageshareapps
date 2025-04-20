import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    setLoading(true);

    try {
      const id = uuidv4();
      localStorage.setItem(`secret-message-${id}`, message);

      const fullLink = `${window.location.origin}/message/${id}`;
      setLink(fullLink);

      await navigator.clipboard.writeText(fullLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Error creating message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!link) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Secret Message",
          text: "Check out this secret message:",
          url: link,
        });
      } else {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl mb-3">Create Secret Message</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        className="w-full h-40 border p-2"
      ></textarea>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-4 ${
          loading ? "bg-gray-400" : "bg-green-600"
        } text-white px-4 py-2 rounded`}
      >
        {loading ? "Generating..." : "Generate Secret Link"}
      </button>

      {copied && (
        <p className="mt-2 text-green-600 font-semibold">
          ✅ Link copied to clipboard!
        </p>
      )}

      {link && (
        <div className="mt-4">
          <p>Your secret link:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline block break-all mb-2"
          >
            {link}
          </a>
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Share Link
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
