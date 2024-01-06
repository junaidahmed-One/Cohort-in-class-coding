import { useState } from "react";
import { memo } from "react";

function App() {
	const [firstTitle, setFirstTitle] = useState("my name is harkirat");

	function changeTitle() {
		setFirstTitle("My name is " + Math.random());
	}

	return (
		<div>
			<button onClick={changeTitle}>Click me to change the title</button>
			<Header title={firstTitle} />
			<br />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
			<Header title="My name is raman" />
		</div>
	);
}

const Header = memo(function ({ title }) {
	return <div>{title}</div>;
});

export default App;
