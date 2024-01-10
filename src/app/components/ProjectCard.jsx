import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, desc, gitUrl, previewUrl }) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "fit",
				}}
			>
				<div
					className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#101008] bg-opacity-0 hidden 
                            group-hover:flex group-hover:bg-opacity-75
                            transition-all duration-500"
				>
					<Link
						className="h-14 w-14 border-2 mr-2 relative rounded-full border-gray-300 group/link hover:text-white"
						href={gitUrl}
					>
						<CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 cursor-pointer group-hover/link:text-white" />
					</Link>
					<Link
						className="h-14 w-14 border-2 relative rounded-full border-gray-300 group/link hover:text-white"
						href={previewUrl}
					>
						<EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 cursor-pointer group-hover/link:text-white" />
					</Link>
				</div>
			</div>

			<div className="rounded-b-xl bg-[#101008] py-6 px-4">
				<h4 className="my-2 font-semibold text-xl sm:text-2xl lg:text-3xl">
					{title}
				</h4>
				<p className="text-gray-400">{desc}</p>
			</div>
		</div>
	);
};
export default ProjectCard;
