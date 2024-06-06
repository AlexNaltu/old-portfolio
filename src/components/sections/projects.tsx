"use client";

import React from "react";
import Wrapper from "../wrapper/wrapper";
import { websites } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  return (
    <>
      <Image
        src={"/projects.svg"}
        alt="/"
        width={300}
        height={300}
        className="mx-auto mt-10 sm:mt-20 lg:mt-40"
      />
      <Wrapper className="flex justify-center mt-20 mb-36">
        <div className="flex flex-col gap-3 xl:flex-row">
          {websites.map((website, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -50 }}
              viewport={{ amount: "all" }}
              transition={{ duration: 1 }}
              key={i}
              className="flex flex-col gap-2 max-w-[400px] rounded-lg border-[1px] border-third bg-[#0D0D1D] "
            >
              <Image
                src={website.image}
                alt={"/"}
                width={400}
                height={400}
                className="rounded-t-lg"
              />
              <div className=" text-xs text-primary flex justify-between p-2 flex-col h-full gap-3 ">
                <h1 className="text-lg text-white">{website.title}</h1>
                <p className="h-fit">{website.description}</p>
                <div>
                  <div>
                    {website.url && website.url.length > 0 ? (
                      <Link
                        href={website.url}
                        target="_blank"
                        className="text-base text-third underline decoration-primary flex items-center gap-4 hover:text-primary hover:decoration-white duration-200 transition-all ease-linear "
                      >
                        Live Preview <IoIosArrowRoundForward size={30} />
                      </Link>
                    ) : (
                      <h1 className="text-base text-third underline decoration-primary">
                        No Live Preview Available
                      </h1>
                    )}
                  </div>

                  <Link
                    target="_blank"
                    href={website.github}
                    className="text-base text-third underline decoration-primary flex items-center gap-4 hover:text-primary hover:decoration-white duration-200 transition-all ease-linear "
                  >
                    Github Code <IoIosArrowRoundForward size={30} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Projects;

/*  <Link
                        href={website.url}
                        target="_blank"
                        className="text-base text-third underline decoration-primary flex items-center gap-4 hover:text-primary hover:decoration-white duration-200 transition-all ease-linear "
                      >
                        Live Preview <IoIosArrowRoundForward size={30} />
                      </Link>
                     */
