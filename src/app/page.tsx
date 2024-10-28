import { MarqueeDemo } from "@/components/skills/skills";
import Hero from "../components/hero/hero";
import Wrapper from "@/components/wrapper/wrapper";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <Wrapper className="text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Hero />
      <div className="md:flex gap-10">
        <MarqueeDemo />
        <Projects />
      </div>
    </Wrapper>
  );
}
