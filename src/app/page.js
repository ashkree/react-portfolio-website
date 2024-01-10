import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<div className="mt-24 mx-auto py-4 px-12 container">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
			</div>
		</main>
	);
}
