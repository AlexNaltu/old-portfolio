import Hero from "@/components/hero/hero";
import Menu from "@/components/navbar/menu";
import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

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
      <section id="contact">
        <Wrapper className="flex flex-col items-center sm:flex-row justify-center sm:gap-10 ">
          <Image src={"/scripting.svg"} alt="/" width={300} height={300} />
          <h1 className="max-w-md">
            Interested in collaborating? Feel free to reach out either through
            the contact form below or directly at <span className="text-third">alxnbusiness1@gmail.com</span>.
          </h1>
        </Wrapper>
        <Contact />
      </section>
    </>
  );
}
