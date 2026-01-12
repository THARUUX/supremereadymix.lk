import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Technology from "./components/Technology";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Sustainability from "./components/Sustainability";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Technology />
      <Services />
      <Projects />
      <Sustainability />
    </>
  );
}
