import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { skills } from "@/lib/constants";
import Image from "next/image";

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);
console.log(firstRow);

const ReviewCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-56 cursor-pointer overflow-hidden p-4 rounded-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2 border-[#ff6200] border-2 w-fit px-4 rounded-full h-full py-2">
        <Image src={image} width={50} height={50} alt={name} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[195px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent my-10">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-[-2rem]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent dark:from-background"></div>
    </div>
  );
}
