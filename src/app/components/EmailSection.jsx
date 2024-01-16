"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/images/socials_icons/github-icon.svg";
import LinkedInIcon from "../../../public/images/socials_icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const form = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_nbwp5ur",
				"template_4hgjdas",
				form.current,
				"WRQegabE2RfQ9TGg_"
			)
			.then(
				(result) => {
					setEmailSubmitted(true);
					console.log(result.text);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="z-10">
				<h1 className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
					Lets
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-primary-500">
						{" "}
						Connect
					</span>
				</h1>
				<p className="text-gray-200 mb-4 max-w-md">
					I&apos;m currently looking for new opportunities to hone and
					apply my skills. My inbox is always open! Send me a message
					if you have any questions or just want to say hi, I&apos;ll
					do my best to get back to you!
				</p>
				<div className=" socials flex flex-row gap-2 ">
					<Link href="https://github.com/ashkree">
						<Image
							src={GithubIcon}
							alt="Github Icon"
						></Image>
					</Link>
					<Link href="https://www.linkedin.com/feed/">
						<Image
							src={LinkedInIcon}
							alt="LinkedIn Icon"
						></Image>
					</Link>
				</div>
			</div>
			<div>
				<form
					className="flex flex-col gap-6"
					onSubmit={handleSubmit}
					ref={form}
				>
					{/* Name Section */}
					<div>
						<label
							className="block text-sm mb-2 font-medium"
							htmlFor="user_name"
						>
							Your Name
						</label>
						<input
							className="bg-[#191917] border border-gray-800 placeholder-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5"
							name="user_name"
							type="text"
							id="name"
							required
							placeholder="John Doe"
						/>
					</div>

					{/* Email Section */}
					<div>
						<label
							className="block mb-2 text-sm font-medium"
							htmlFor="user_email"
						>
							Your Email
						</label>
						<input
							className="bg-[#191917] border border-gray-800 placeholder-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5"
							name="user_email"
							type="email"
							id="email"
							required
							placeholder="john.doe@xyz.com"
						/>
					</div>

					{/* Message Section */}
					<div>
						<label
							className="block text-sm mb-2 font-medium"
							htmlFor="message"
						>
							Body
						</label>
						<textarea
							className="bg-[#191917] border border-gray-800 placeholder-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5"
							name="message"
							type="text"
							id="message"
							placeholder="Lets talk about..."
						/>
					</div>

					{/* submit button */}
					<button
						type="submit"
						className="bg-violet-500 hover:bg-primary-500 text-white font-medium py-2.5 px-5 w-full rounded-lg"
					>
						Send Message
					</button>
					{emailSubmitted && (
						<p className="text-green-700 text-sm mt-2">
							Email send succesfully!
						</p>
					)}
				</form>
			</div>
		</section>
	);
};
export default EmailSection;
