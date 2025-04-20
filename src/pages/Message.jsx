import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Message = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedMessage = localStorage.getItem(`secret-message-${id}`);
    if (storedMessage) {
      setMessage(storedMessage);
      localStorage.removeItem(`secret-message-${id}`); // optional: delete after view
    } else {
      setMessage("This message has expired or doesn't exist.");
    }
  }, [id]);

  return (
    <div className="p-5">
      <h1 className="text-xl mb-3">Secret Message</h1>
      <p className="border p-4 bg-gray-100">{message}</p>
    </div>
  );
};

export default Message;
