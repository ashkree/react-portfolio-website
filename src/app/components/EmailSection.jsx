"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/socials_icons/github-icon.svg";
import LinkedInIcon from "../../../public/images/socials_icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		/* TODO: Delete comment when API key is generated from Resend.com */

		/* 
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		const options = {
			method: "POST",
			header: { "Content-Type": "application/json" },
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();

		if (resData.status === "200") {
			console.log("message sent.");
			setEmailSubmitted(True);
		}
        */

		setEmailSubmitted(True);
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

			<div className="z-10">
				<h1 className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
					Lets
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-primary-500">
						{" "}
						Connect
					</span>
				</h1>
				<p className="text-gray-200 mb-4 max-w-md">
					I'm currently looking for new opportunities to hone and
					apply my skills. My inbox is always open! Send me a message
					if you have any questions or just want to say hi, I'll do my
					best to get back to you!
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
				>
					{/* Email Section */}
					<div>
						<label
							className="block mb-2 text-sm font-medium"
							htmlFor="email"
						>
							Your Email
						</label>
						<input
							className="bg-[#191917] border border-gray-800 placeholder-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5"
							name="email"
							type="email"
							id="email"
							required
							placeholder="john.doe@xyz.com"
						/>
					</div>

					{/* Subject Section */}
					<div>
						<label
							className="block text-sm mb-2 font-medium"
							htmlFor="subject"
						>
							Subject
						</label>
						<input
							className="bg-[#191917] border border-gray-800 placeholder-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5"
							name="subject"
							type="text"
							id="subject"
							required
							placeholder="Hello there!"
						/>
					</div>

					{/* Subject Section */}
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
							placeholder="Let's talk about..."
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
