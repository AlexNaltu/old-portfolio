import { skills } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="flex">
      {skills.map((skill, i) => (
        <div key={i}>
          <Image src={skill.image} alt={skill.name} width={200} height={200} />
          <div className="bg-gradient-to-l from-black from-50% to-white to-100" />
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
