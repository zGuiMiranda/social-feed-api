import { Server } from "socket.io";
import app from "./app";
import http from "http";

const io = new Server(http.createServer(app?.server), {
  cors: {
    origin: process.env.FRONT_SOCKET_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
  socket.on("message", function () {
    console.log("message message");
  });
});

io.on("message", (socket) => {
  console.log("message message");
});
io.listen(process.env.SOCKET_PORT ? +process.env.SOCKET_PORT : 8081);

export default io;
