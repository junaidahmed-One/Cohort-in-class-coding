import { useState } from "react";

export function CreateTodo() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	return (
		<div>
			<input
				type="text"
				placeholder="Enter title"
				onChange={function (e) {
					const value = e.target.value;
					setTitle(e.target.value);
				}}
			></input>
			<br></br>
			<input
				type="text"
				placeholder="Enter description"
				onChange={function (e) {
					const value = e.target.value;
					setDescription(e.target.value);
				}}
			></input>
			<br></br>

			<button
				onClick={() => {
					fetch("http://localhost:3000/todo", {
						method: "POST",
						body: JSON.stringify({
							title: title,
							description: description,
						}),
						headers: {
							"Content-type": "application/json",
						},
					}).then(async function (res) {
						const json = res.json();
						alert("Todo added");
					});
				}}
			>
				Add a todo
			</button>
		</div>
	);
}
