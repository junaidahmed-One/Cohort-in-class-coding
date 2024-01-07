import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [selectedID, setID] = useState(1);
	return (
		<div>
			<button
				onClick={function () {
					setID(1);
				}}
			>
				1
			</button>
			<button
				onClick={function () {
					setID(2);
				}}
			>
				2
			</button>
			<button
				onClick={function () {
					setID(3);
				}}
			>
				3
			</button>
			<button
				onClick={function () {
					setID(4);
				}}
			>
				4
			</button>
			<Todo id={selectedID} />
		</div>
	);
}

function Todo({ id }) {
	const [todo, setTodo] = useState({});

	useEffect(() => {
		fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(
			async function (res) {
				const json = await res.json();
				setTodo(json.todo);
			}
		);
	}, [id]);

	return (
		<div>
			<h1>{todo.title}</h1>
			<h4>{todo.description}</h4>
		</div>
	);
}

export default App;
