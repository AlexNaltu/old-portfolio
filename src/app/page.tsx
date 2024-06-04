import Hero from "@/components/hero/hero";
import Menu from "@/components/navbar/menu";
import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Menu />
      <section className="section-1-bg">
        <Hero />
      </section>
      <section className="custom-shadow pb-5" id="about">
        <AboutMe />
      </section>
      <section className="section-3-bg" id="skills">
        <Skills />
      </section>
      <section className="section-4-bg" id="projects">
        <Projects />
      </section>
      <section id="contact" className="custom-shadow">
        <Contact />
      </section>
    </>
  );
}
