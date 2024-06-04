"use client";
import Image from "next/image";
import React from "react";
import Wrapper from "../wrapper/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { skills } from "@/lib/constants";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";

const Skills = () => {
  return (
    <>
      <Image
        src={"/skills.svg"}
        alt="/"
        width={300}
        height={300}
        className="mx-auto mt-10 sm:mt-20 lg:mt-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "all" }}
        transition={{ duration: 1 }}
        className=" my-10"
      >
        <Wrapper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 9,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1000,
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <Image
                    src={skill.image}
                    alt="/"
                    width={100}
                    height={100}
                    className="border-[1px] border-third rounded-lg p-2 shadow-2xl"
                  />
                  <p className="text-xs">{skill.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Skills;
