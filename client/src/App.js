import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io("https://tarea-3-websocket.2021-2.tallerdeintegracion.cl", {
  path: "/trucks/"});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

function App() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  socket.emit("TRUCKS");

  const joinRoom = () => {
    if (username !== "") {
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <Chat socket={socket} username={username}/>
      )}
    </div>
  );
}

export default App;
