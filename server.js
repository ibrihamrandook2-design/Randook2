// server.js
import express from "express";
import { WebSocketServer } from "ws";

const app = express();

const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
  ws.on("message", message => {
    ws.send(`Echo: ${message}`);
  });
});
