// ProjectsSection.tsx
import { websites } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-3 scroll-offset" id="projects">
      <h1 className="uppercase text-xl font-black md:text-2xl lg:text-4xl">
        Projects
      </h1>
      {websites.map((project, i) => (
        <div key={i} className="bg-black p-2 md:flex gap-2">
          <div>
            <h2 className="text-xl">{project.title}</h2>
            <div className="bg-gradient-to-l from-black from-50% to-white to-100% w-full h-2" />
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="py-3 md:hidden"
            />
            <p className="md:mt-2">{project.description}</p>
            <Link
              href={project.url}
              className="hidden md:block mt-3 font-black underline hover:text-red-800 transition-all duration-200 ease-in-out w-fit"
              target="_blank"
            >
              Live Preview
            </Link>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="hidden md:block  md:max-w-[40%] object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
