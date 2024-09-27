"use client";

import { useState } from "react";
//@ts-ignore
import { Scrollama, Step } from "react-scrollama";
import Wrapper from "../wrapper/wrapper";
import { websites } from "@/lib/constants";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";

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
              margin: "50vh 0",
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
              margin: "50vh 0",
              opacity: currentStepIndex === 2 ? 1 : 0.2,
            }}
            className="text-white"
          >
            I'm a Scrollama Step of index 2
          </div>
        </Step>
        <Step data={3}>
          <div
            style={{
              margin: "50vh 0",
              opacity: currentStepIndex === 3 ? 1 : 0.2,
            }}
            className="text-white"
          >
            I'm a Scrollama Step of index 3
          </div>
        </Step>
      </Scrollama>
    </Wrapper>
  );
};

export default Sections;

/**
 * 
 *  {[1, 2, 3, 4].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: "50vh 0",
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
              className="text-white"
            >
              I'm a Scrollama Step of index {stepIndex}
            </div>
          </Step>
        ))}
 */
