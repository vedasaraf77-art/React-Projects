const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

// WebSocket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendNotification", (data) => {
    io.emit("newNotification", data); // send to all users
  });

  socket.on("markAllRead", () => {
  io.emit("allRead"); // broadcast to all clients
});

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});