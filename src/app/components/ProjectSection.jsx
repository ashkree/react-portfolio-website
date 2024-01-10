"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = PROJECTS_DATA.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
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
			<ul
				ref={ref}
				className="grid md:grid-cols-3 gap-8 md:gap-12"
			>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							desc={project.desc}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};
export default ProjectSection;
