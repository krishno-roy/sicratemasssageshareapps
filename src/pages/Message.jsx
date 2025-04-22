import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewMessage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const decoded = decodeURIComponent(escape(atob(id))); // decode base64
      setMessage(decoded);
    } catch (err) {
      setMessage("This message is invalid or corrupted.");
    }
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <h2>See Your Secret Massage</h2>
      <p>{message}</p>
    </div>
  );
};

export default ViewMessage;
