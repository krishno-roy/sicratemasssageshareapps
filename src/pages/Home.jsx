import React, { useState } from "react";

const CreateMessage = () => {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const encoded = btoa(unescape(encodeURIComponent(message))); // encode in base64
    const shareLink = `${window.location.origin}/message/${encoded}`;
    setLink(shareLink);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Write Your Secret Massage</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          cols="40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Your Massage Here "
          required
      
          className="w-full"
        />
        <br />
        <button type="submit" className="bg-black text-white py-2 px-4">Cleat Share Link</button>
      </form>

      {link && (
        <div>
          <p>Share Your Link:</p>
          <a href={link}>{link}</a>
        </div>
      )}
    </div>
  );
};

export default CreateMessage;
