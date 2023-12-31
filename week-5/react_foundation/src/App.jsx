/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([
		{
			title: "Gym in morning",
			description: "Gym workout",
		},
		{
			title: "Study web dev",
			description: "fullstack cohort",
		},
	]);

	function addTodo() {
		setTodos([
			...todos,
			{
				title: "new todo",
				description: "desc for new todo",
			},
		]);
	}

	return (
		<div>
			<button onClick={addTodo}>Add random Todo</button>
			{todos.map(function (todo) {
				return (
					<CustomeButton
						title={todo.title}
						description={todo.description}
					/>
				);
			})}
		</div>
	);
}

function CustomeButton(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.description}</h2>
		</div>
	);
}

export default App;
