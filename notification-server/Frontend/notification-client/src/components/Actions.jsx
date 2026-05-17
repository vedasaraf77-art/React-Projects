import { socket } from "../socket/socket";

const Actions = () => {
  const sendNotification = () => {
    socket.emit("sendNotification", {
      message: "You received points 🎉",
    });
  };

  return (
    <div>
      <h2>Actions</h2>
      <button onClick={sendNotification}>
        Send Notification
      </button>
    </div>
  );
};

export default Actions;