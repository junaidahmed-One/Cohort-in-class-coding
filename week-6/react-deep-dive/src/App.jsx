import { useState } from "react";
import { memo } from "react";

let counter = 4;
function App() {
	return (
		<div>
			<CardWrapper>
				<TextComponent></TextComponent>
			</CardWrapper>
			<CardWrapper>
				<TextComponent></TextComponent>
			</CardWrapper>
		</div>
	);
}

function CardWrapper({ children }) {
	return (
		<div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
	);
}

function TextComponent() {
	return <div>Text Component</div>;
}

export default App;
