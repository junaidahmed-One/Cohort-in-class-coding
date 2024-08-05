import { useState } from "react";
import { Assignment1 } from "./components/Assingment1";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Assignment1 />
			{/* <Assignment2 /> */}
		</>
	);
}

export default App;
