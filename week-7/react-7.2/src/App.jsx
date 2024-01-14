import { useContext, useState } from "react";
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Count />
			</RecoilRoot>
		</div>
	);
}

function Count() {
	return (
		<div>
			<CountRenderer />
			<Buttons />
		</div>
	);
}

function CountRenderer() {
	const count = useRecoilValue(countAtom);
	return (
		<div>
			{count}

			<EvenRerender />
		</div>
	);
}

function EvenRerender() {
	const isEven = useRecoilValue(evenSelector);

	return <div>{isEven === 0 ? "Its even" : "Its odd"}</div>;
}

function Buttons() {
	const setCount = useSetRecoilState(countAtom);
	return (
		<div>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount((c) => c - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
