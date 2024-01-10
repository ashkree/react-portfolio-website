"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pt-2">
				<li>Python</li>
				<li>HTML & CSS</li>
				<li>JavaScript</li>
				<li>Java</li>
				<li>React</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pt-2">
				<li>INTO Stirling</li>
				<li>Murdoch University Dubai</li>
			</ul>
		),
	},
	{
		title: "Experience",
		id: "experience",
		content: (
			<ul className="list-disc pt-2">
				<li>
					Website Development Intern - University of Stirling
					Students&apos; Union
				</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/AboutImage.png"
					alt=""
					height={500}
					width={500}
				></Image>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h3 className="mb-3 text-2xl sm:text-3xl lg:text-4xl">
						About Me
					</h3>

					<p className="text-base md:text-lg">
						Hello there! I am passionate and aspiring software
						developer with a deep love for turning innovative ideas
						into functional, user-friendly applications. As a
						student, I am building up a solid foundation in computer
						science, aritificial intelligence and a flair for
						continous learning.
					</p>

					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>

						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education
						</TabButton>

						<TabButton
							selectTab={() => handleTabChange("experience")}
							active={tab === "experience"}
						>
							Experience
						</TabButton>
					</div>

					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutSection;
