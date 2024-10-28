"use client";

import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";
import { websites } from "@/lib/constants";
import Image from "next/image";

export function Projects() {
  const { theme } = useTheme();
  return (
    <div className={"flex w-full flex-col gap-4 lg:max-w-[440px] md:my-16"}>
      {websites.map((website, i) => (
        <MagicCard
          key={i}
          className="cursor-pointer flex-col items-center justify-center shadow-2xl rounded-none  text-sm border-[#ff6200]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div>
            <Image
              src={website.image}
              alt="/"
              width={1000}
              height={1000}
              className="object-contain border-b-2 border-[#ff6200]"
            />
            <h1 className="px-3 mt-2 text-lg font-black">{website.title}</h1>
            <div className="flex gap-3 px-3 mb-2 text-[#ff6200]">
              {website.technologies.map((tech, i) => (
                <div key={i}>
                  <p>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
}
