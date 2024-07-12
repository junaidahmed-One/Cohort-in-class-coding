import express from "express";

import { createClient } from "redis";

const app = express();
app.use(express.json());
const client = createClient();

app.post("/submit", async (req, res) => {
	const userId = req.body.userId;
	const problemId = req.body.problemId;
	const language = req.body.language;

	try {
		await client.LPUSH(
			"problems",
			JSON.stringify({ userId, problemId, language })
		);
		console.log(req.body);
		res.status(201).json({ message: "Submission received!" });
	} catch (error) {
		console.error("Redis error: ", error);
		res.status(500).send("Failed to store submission.");
	}
});

async function startServer() {
	try {
		await client.connect();
		console.log("Connected to redis");

		app.listen(3000, () => {
			console.log("Started server on PORT 3000");
		});
	} catch (error) {
		console.log("Failed to connect to redis");
	}
}

startServer();
