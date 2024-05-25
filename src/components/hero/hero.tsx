"use client";
import React, { useCallback } from "react";
import Wrapper from "../wrapper/wrapper";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const options: any = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    style: {
      position: "absolute",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };
  return (
    <>
      <div className="flex absolute  left-0 h-1/2 lg:h-2/3 w-[100vw]">
        <div className="relative w-full">
          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{ ...options }}
          />
        </div>
      </div>

      <Wrapper className=" flex justify-center my-20 lg:my-56">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-center max-w-lg sm:text-lg  lg:text-3xl lg:max-w-2xl"
        >
          Hi, my name is Alex. I'm a 19-year-old developer who loves coding and
          building new projects. Nice to meet you!
        </motion.h1>
      </Wrapper>
    </>
  );
};

export default Hero;
