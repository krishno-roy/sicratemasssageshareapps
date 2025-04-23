import React, { useState } from "react";

const CreateMessage = () => {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const encoded = btoa(unescape(encodeURIComponent(message)));
    const shareLink = `${window.location.origin}/message/${encoded}`;
    setLink(shareLink);
    setMessage("");
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-5">
   

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full z-10 relative">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">
          Write a secret message
        </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="5"
            placeholder="Write here your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Create link
          </button>
        </form>

        {link && (
          <div className="mt-6 bg-gray-100 p-4 rounded-xl text-center break-words">
            <p className="text-gray-700 mb-2">Share this link:</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <a href={link} className="text-blue-600 underline break-all">
                {link}
              </a>
              <button
                onClick={handleCopy}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                {copied ? "✅ Copied" : "📋 Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default CreateMessage;
