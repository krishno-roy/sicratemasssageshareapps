import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Message = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const decoded = decodeURIComponent(escape(atob(id)));
      setMessage(decoded);
    } catch (err) {
      setMessage("This message is invalid or corrupted.");
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-5">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-3 text-blue-700">
          Your secret message
        </h1>
        <p className="border p-4 bg-gray-100 rounded-md text-gray-800">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Message;
