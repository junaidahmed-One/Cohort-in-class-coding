import { useEffect, useState } from "react";
import axios from "axios";

function useTodo() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
			setTodos(res.data.todos);
			setLoading(false);
		});
	}, []);

	return { todos, isLoading };
}

function App() {
	const { todos, isLoading } = useTodo();

	if (isLoading) {
		return (
			<div>
				{console.log("Loading...")}
				Loading....
			</div>
		);
	}
	return (
		<>
			{todos.map((todo, index) => (
				<Track key={index} todo={todo} />
			))}
		</>
	);
}

function Track({ todo }) {
	return (
		<div>
			{todo.title}
			<br />
			{todo.description}
		</div>
	);
}

export default App;
