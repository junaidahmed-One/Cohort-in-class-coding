import { useState } from "react";
import { Assignment1 } from "./components/Assingment1";
import { Assignment2 } from "./components/Assignment2";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Assignment1 />
			<Assignment2 />
		</>
	);
}

export default App;
