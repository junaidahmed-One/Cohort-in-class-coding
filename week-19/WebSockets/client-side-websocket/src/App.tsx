import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const soc = new WebSocket("ws://localhost:8080");

    soc.onopen = () => {
      console.log("Connected");
      setSocket(soc);
    };

    soc.onmessage = (message) => {
      console.log("Received message : ", message.data);
      setLatestMessage(message.data);
    };

    return () => {
      socket?.close();
    };
  }, []);

  if (!socket) {
    return <div>Connecting to a socket server ...</div>;
  }

  return (
    <div>
      <input
        type="text"
        name="message"
        id="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          socket.send(message);
        }}
      >
        Send
      </button>
      {latestMessage}
    </div>
  );
}

export default App;
