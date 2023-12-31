const express = require("express");
import { createTodo, updateTodo } from "./types";
import { todo } from "./dbSchema";
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
	const todoBody = req.body;
	const parsedBody = createTodo.safeParse(todoBody);

	if (!parsedBody.success) {
		res.status(411).json({
			message: "Wrong inputs!",
		});
		return;
	}
	todo.create({
		id: todoBody.id,
		title: todoBody.title,
		description: todoBody.description,
		completed: false,
	});

	res.status(201).json({
		message: "Todo created",
	});
});

app.get("/todos", async function (req, res) {
	const allTodos = await todo.find({});
	res.json({
		todos: allTodos,
	});
});

app.put("/completed", async function (req, res) {
	const todoBody = req.body;
	const parsedBody = updateTodo.safeParse(todoBody);

	if (!parsedBody.success) {
		res.status(411).json({
			message: "Wrong inputs!",
		});
		return;
	}

	await todo.update(
		{
			id: req.body.id,
		},
		{
			completed: true,
		}
	);
});

app.listen(3000);
