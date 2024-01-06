import { useState } from "react";
import { memo } from "react";

let counter = 4;
function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "Go to gym",
			description: "Gym in the morning",
		},
		{
			id: 2,
			title: "Go to gym",
			description: "Gym in the morning",
		},
		{
			id: 3,
			title: "Go to gym",
			description: "Gym in the morning",
		},
	]);

	function addTodo() {
		setTodos([
			...todos,
			{
				id: counter++,
				title: Math.random(),
				description: Math.random(),
			},
		]);
	}

	return (
		<div>
			<button onClick={addTodo}>Add Todo</button>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					title={todo.title}
					description={todo.description}
				></Todo>
			))}
		</div>
	);
}

function Todo({ title, description }) {
	return (
		<div>
			<h1>{title}</h1>
			<h4>{description}</h4>
		</div>
	);
}

export default App;
