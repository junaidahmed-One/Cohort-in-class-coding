import { memo, useCallback, useEffect, useMemo, useState } from "react";

function App() {
	const [excahnge1Data, setExcahnge1Data] = useState({});
	const [excahnge2Data, setExcahnge2Data] = useState({});
	const [bankData, setBankData] = useState({});

	useEffect(() => {
		setTimeout(() => {
			setExcahnge1Data({ returns: 100 });
		});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setExcahnge2Data({ returns: 100 });
		});
	}, []);

	useEffect(
		() => {
			//what logic to run
			setTimeout(() => {
				setBankData({ income: 100 });
			}, 3000);
		},
		[] /* Dependency array [] -> on what state variable change should it run*/
	);

	// useMemo() hook, saves re-calculating any operation. in the below example, cryptoReturns should not be calculated again after bankData updates,
	//so using useMemo() hook. calculates only when excahnge1Data, excahnge2Data either of this changes.

	// const cryptoReturns = useMemo(() => {
	// 	console.log("under usememo");
	// 	return excahnge1Data.returns + excahnge2Data.returns;
	// }, [excahnge1Data, excahnge2Data]);

	//const incomeTax = (bankData.income + cryptoReturns) * 0.3;

	//useCallback() is used to memoize the function, and change only dependency array updates.
	const calculateCryptogain = useCallback(
		function () {
			return excahnge1Data.returns + excahnge2Data.returns;
		},
		[excahnge1Data, excahnge2Data]
	);

	return (
		<div>
			<CryptoGainCalc
				calculateCryptogain={calculateCryptogain}
			></CryptoGainCalc>
		</div>
	);
}

// memo is used to skip re-render of component if its states are unchanged
const CryptoGainCalc = memo(function ({ calculateCryptogain }) {
	console.log("Child re-rendered");
	return <div>Your crypto returns are {calculateCryptogain()}</div>;
});

export default App;
