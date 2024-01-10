"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECTS_DATA = [
	{
		id: 1,
		title: "React Portfolio Website",
		desc: "Portfolio website made with React",
		image: "/images/AboutImage.png",
		gitUrl: "https://github.com/ashkree/react-portfolio-website.git",
		previewUrl: "/",
		tag: ["All", "Web"],
	},
];

const ProjectSection = () => {
	const [tag, setTag] = useState("All");

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = PROJECTS_DATA.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<>
			<h3 className=" text-center font-bold mb-3 text-2xl sm:text-3xl lg:text-4xl">
				My Projects
			</h3>
			<div className=" flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					title="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					title="Web"
					isSelected={tag === "Web"}
				/>
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						desc={project.desc}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};
export default ProjectSection;
