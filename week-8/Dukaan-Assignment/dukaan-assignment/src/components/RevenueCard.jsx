export const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
	return (
		<div>
			<div>{title}</div>
			<div>{amount}</div>
			<div>{orderCount ? <div>{orderCount} order(s)</div> : null}</div>
		</div>
	);
};
