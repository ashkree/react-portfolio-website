import React from "react";

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? "text-white border-b border-primary-500"
		: "text-gray-500 hover:text-white";

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
		</button>
	);
};
export default TabButton;
