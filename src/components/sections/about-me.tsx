"use client";

import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <Image
        src={"/aboutme.svg"}
        alt="/"
        width={300}
        height={300}
        className="mx-auto mt-10 sm:mt-20 lg:mt-40"
      />
      <Wrapper>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "all" }}
          transition={{ duration: 1 }}
          className="lg:text-xl xl:text-2xl "
        >
          My name is <span className="text-third">Naltu Alexandru</span>. I am
          19 years old and I love building websites. I finished a Web
          Development training course 1 year ago and have continued building
          projects and learning new technologies. Currently, I use the T3 Stack
          as I find it very interesting (React, Next.js, Prisma, NextAuth, TRPC,
          TailwindCSS). Hope we can work together soon!
        </motion.h1>
      </Wrapper>
    </>
  );
};

export default AboutMe;
