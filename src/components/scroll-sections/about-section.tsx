import React from "react";

const AboutMeSection = () => {
  return (
    <div id="about" className="scroll-offset">
      <h1 className="uppercase text-xl font-black md:text-2xl lg:text-4xl mb-2">
        About me
      </h1>
      <div className="bg-gradient-to-l from-neutral-950 from-50% to-white to-100% w-full h-2 mb-3" />
      <h2 className="text-lg xl:text-2xl">
        My name is Alex, and I’m a 19-year-old from Germany. I began my coding
        journey nearly two years ago, starting with a 5-month front-end
        development training course where I learned the fundamentals of web
        development. In addition to my front-end skills, I have experience with
        Node.js and have worked with several back-end technologies. I’m a highly
        creative individual with a passion for exploring and learning new
        things. I speak excellent English, decent German, and my mother language
        is Romanian
      </h2>
    </div>
  );
};

export default AboutMeSection;
