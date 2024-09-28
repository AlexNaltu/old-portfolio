"use client";

import { useState } from "react";
//@ts-ignore
import { Scrollama, Step } from "react-scrollama";
import Wrapper from "../wrapper/wrapper";
import { websites } from "@/lib/constants";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import AboutMeSection from "./about-section";
import Contact from "../contact/contact-me";

const Sections = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  //@ts-ignore
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <Wrapper>
      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        <Step data={0}>
          <div
            style={{
              margin: "20vh 0",
              opacity: currentStepIndex === 0 ? 1 : 0.2,
            }}
            className="text-white"
          >
            <ProjectsSection />
          </div>
        </Step>
        <Step data={1}>
          <div
            style={{
              margin: "20vh 0",
              opacity: currentStepIndex === 1 ? 1 : 0.2,
            }}
            className="text-white"
          >
            <SkillsSection />
          </div>
        </Step>
        <Step data={2}>
          <div
            style={{
              margin: "20vh 0",
              opacity: currentStepIndex === 2 ? 1 : 0.2,
            }}
            className="text-white"
          >
            <AboutMeSection />
          </div>
        </Step>
        <Step data={3}>
          <div
            style={{
              margin: "20vh 0",
              opacity: currentStepIndex === 3 ? 1 : 0.2,
            }}
            className="text-white"
          >
            <Contact />
          </div>
        </Step>
      </Scrollama>
    </Wrapper>
  );
};

export default Sections;
