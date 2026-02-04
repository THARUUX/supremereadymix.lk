import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import VideoSection from "./components/VideoSection";
import Technology from "./components/Technology";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Sustainability from "./components/Sustainability";
import HumanCapital from "./components/HumanCapital";
import FollowUs from "./components/FollowUs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <VideoSection />
      <Technology />
      <HumanCapital />
      <Services />
      <Projects />
      <Sustainability />
      <FollowUs />
      <ContactUs />
    </>
  );
}
