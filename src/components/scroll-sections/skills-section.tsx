import { skills } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <>
      <h1
        className="uppercase text-xl font-black md:text-2xl lg:text-4xl mb-2 scroll-offset"
        id="skills"
      >
        Technologies I used
      </h1>
      <div className="bg-gradient-to-l from-neutral-950 from-50% to-white to-100% w-full h-2 mb-3" />

      <div className="flex flex-wrap items-center">
        {skills.map((skill, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={skill.image}
              alt={skill.name}
              width={100}
              height={100}
            />
            <div className="bg-gradient-to-l from-black from-50% to-white to-100" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsSection;
