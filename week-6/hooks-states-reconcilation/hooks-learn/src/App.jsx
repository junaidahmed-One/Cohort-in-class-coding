import { useEffect, useState } from "react";

function App() {
	const [excahngeData, setExcahngeData] = useState({});
	const [bankData, setBankData] = useState({});
	console.log(`Re-rendered`);

	useEffect(
		() => {
			//what logic to run
			setTimeout(() => {
				setBankData({ income: 100 });
			}, 3000);
		},
		[] /* Dependency array [] -> on what state variable change should it run*/
	);

	useEffect(() => {
		setTimeout(() => {
			setExcahngeData({ returns: 100 });
		}, 1000);
	}, []);

	const incomeTax = (bankData.income + excahngeData.returns) * 0.3;

	return <div>Hi your income tax returns are {incomeTax}</div>;
}

export default App;
