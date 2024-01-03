import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setInterval(() => {
			fetch("http://localhost:3000/todos").then(async function (res) {
				const json = await res.json();
				setTodos(json.todos);
			});
		}, 10000);
	}, [todos]);
	return (
		<div>
			<CreateTodo></CreateTodo>
			<Todos todos={todos}></Todos>
		</div>
	);
}

export default App;
