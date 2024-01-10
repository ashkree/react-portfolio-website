import React from "react";

const ProjectTag = ({ title, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "border-primary-500"
		: "border-slate-600 hover:border-white";

	return (
		<button
			className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
			onClick={() => onClick(title)}
		>
			{title}
		</button>
	);
};
export default ProjectTag;
