/* eslint-disable react/prop-types */
import { useState } from "react";

import "./App.css";

function App() {
	return (
		<div>
			<HeaderWithButton></HeaderWithButton>
			<Header title="My name is raman" />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
		</div>
	);
}

function HeaderWithButton() {
	const [firstTitle, setFirstTitle] = useState("my name is Junaid");

	function changeTitle() {
		setFirstTitle("My name is " + Math.random());
	}

	return (
		<>
			<button onClick={changeTitle}>Click me to change the title</button>
			<Header title={firstTitle}></Header>
		</>
	);
}

function Header({ title }) {
	return <div>{title}</div>;
}

export default App;
