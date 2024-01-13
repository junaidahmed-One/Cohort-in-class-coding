import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Landing = lazy(() => import("./Pages/Landing"));

function App() {
	return (
		<div>
			<div>Hi There topbar</div>
			<BrowserRouter>
				<Appbar />
				<Routes>
					<Route
						path="/dashboard"
						element={
							<Suspense fallback={"loding..."}>
								{" "}
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<Suspense fallback={"loading..."}>
								{" "}
								<Landing />{" "}
							</Suspense>
						}
					/>
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
