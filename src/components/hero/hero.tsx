import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
      <div className="flex h-fit gap-5 mt-10">
        <Image
          src="/subaru.jpg"
          alt="/"
          width={150}
          height={150}
          className="aspect-square object-cover rounded-sm hidden min-[470px]:inline-block"
        />
        <div>
          <h1 className="uppercase text-2xl sm:text-4xl">Naltu Alexandru</h1>
          <h2 className="text-sm gradient-text sm:text-lg my-1">
            Full-Stack Developer
          </h2>
          <div className="flex gap-2 ">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="glow-on-hover rounded-full" size={25} />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin className="glow-on-hover rounded-full" size={25} />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill
                className="glow-on-hover rounded-full"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
