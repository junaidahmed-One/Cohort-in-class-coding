import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
const httpServer = app.listen(8080, () => {
	console.log("Started on port 8080");
});

const wss = new WebSocketServer({ server: httpServer });

console.log(wss);
wss.on("connection", function connection(ws) {
	ws.on("error", (err) => console.error(err));
	ws.on("message", function message(data, isBinary) {
		wss.clients.forEach(function each(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(data, { binary: isBinary });
			}
		});
	});

	ws.send("Hello! Message From Server!!");
});
