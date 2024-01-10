"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 1 / 2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center justify-self-start sm:text-left"
				>
					<h1 className="mb-3 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-primary-500">
							Hello, I&apos;m {"\n"}
						</span>
						Maveron
					</h1>
					<h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
						<TypeAnimation
							sequence={[
								"Web Developer",
								2000, // duration of text before change. In ms (1000 ms = 1 s)
								"Software Developer",
								2000,
							]}
							wrapper="span"
							speed={25}
							repeat={Infinity}
						/>
					</h2>
					<div className="py-5">
						<Link
							href="#contact"
							className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-violet-500 to-primary-500 text-white"
						>
							Connect with me
						</Link>

						<Link
							href="/resources/Curriculum Vitae.pdf"
							target="_blank"
							download
							className="px-1 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-violet-500 to-primary-500 text-white"
						>
							<span className="bg-[#141414] rounded-full px-5 py-2">
								Download my CV
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 1 / 2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
						<Image
							src="/images/DALL-E 2 Avatar.png"
							alt="Hero Image"
							height={500}
							width={500}
							className="absolute rounded-full transfrom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						></Image>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default HeroSection;
