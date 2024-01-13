import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { Landing } from "./Pages/Landing";

function App() {
	return (
		<div>
			<div>Hi There topbar</div>
			<BrowserRouter>
				<Appbar />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/" element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

function Appbar() {
	const navigate = useNavigate();

	return (
		<div>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Landing
			</button>

			<button
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				Dashboard
			</button>
		</div>
	);
}

export default App;
