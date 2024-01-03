"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
							Hello, I'm {"\n"}
						</span>
						Maveron
					</h1>
					<h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
						<TypeAnimation
							sequence={[
								"Web Developer",
								1000,
								"Software Developer",
								1000,
							]}
							wrapper="span"
							speed={25}
							repeat={Infinity}
						/>
					</h2>
					<p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
					<div>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 text-white">
							Hire me
						</button>
						<button className="px-1 py-1 mt-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 hover:bg-slate-800">
							<span className="block bg-[#141414] rounded-full px-5 py-2">
								Download CV
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
						<Image
							src="/images/DALL-E 2 Avatar.png"
							alt="Hero Image"
							height={500}
							width={500}
							className="absolute rounded-full transfrom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						></Image>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HeroSection;
