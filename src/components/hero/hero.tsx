"use client";

import React from "react";
import Wrapper from "../wrapper/wrapper";
import { Button } from "../ui/button";
import { socials } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper className="flex flex-col sm:flex-row sm:justify-between ">
      <div className="my-10 lg:my-28 flex flex-col gap-4">
        <h1 className="text-[1.4rem] lg:text-3xl">
          Hello Friend, My Name Is <span className="text-primary">Alex</span>{" "}
          <br /> I am a <span className="text-third">Frontend Developer</span>
        </h1>
        <div className="flex gap-4">
          {socials.map((social, i) => (
            <Link
              href={social.url}
              key={i}
              className="hover:text-third transition-all duration-200 ease-in-out"
            >
              <i>{social.icon}</i>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button className="rounded-full bg-transparent border-2 border-primary">
            Contact Me
          </Button>
          <Button className="rounded-full">Download CV</Button>
        </div>
      </div>

      <Image
        src="/hellofriend.svg"
        alt="Hero"
        width={350}
        height={300}
        className="self-center rounded-full"
      />
    </Wrapper>
  );
};

export default Hero;
