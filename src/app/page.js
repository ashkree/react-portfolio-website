import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<div className="mx-auto py-4 px-12 container">
				<HeroSection />
			</div>
		</main>
	);
}
