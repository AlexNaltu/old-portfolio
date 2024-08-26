import { IconCloudComponent } from "@/components/cloud/icon-cloud";
import Contact from "@/components/contact/contact-me";
import DotPattern from "@/components/magicui/dot-pattern";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/wrapper/wrapper";
import { aboutMe, websites } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)],",
          "absolute inset-0 z-0"
        )}
      />
      <Wrapper className="max-w-[1000px] my-4 relative z-10">
        <div>
          <section className="flex items-center gap-2">
            <Image src="/logo.png" alt="Hero" width={60} height={60} />
            <div>
              <h1 className="font-black text-xs">
                Naltu Alexandru's Portfolio
              </h1>

              <p className="text-sm">- Based in Germany</p>
            </div>
          </section>
          <Separator className="mt-4" />

          <div>
            <h3 className="my-3 text-lg font-black">About Me:</h3>
            {aboutMe.map((item, i) => (
              <div key={i} className="text-xs flex gap-2">
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Separator className="mt-4" />

          <p className="my-4 text-sm font-semibold">
            Hello, I am Naltu Alexandru, a 19-year-old Frontend Developer based
            in Germany. I am a self-taught developer with a passion for building
            beautiful and responsive websites. I have been coding for 1 year and
            3 months, starting with a 5-month training course that helped me
            learn the basics of web development.
          </p>
          <IconCloudComponent />
          <div className="bg-white rounded-lg p-1 lg:p-4">
            {websites.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mt-4 flex-wrap">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-1 gap-y-1 my-1">
                  {item.badges.map((badge, i) => (
                    <Badge key={i} className="bg-black text-white flex-shrink ">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="z-50"
                />
                <Link
                  href={item.url}
                  className="mt-2 font-black underline hover:text-slate-600 duration-200 transition-all ease-out"
                  target="_blank"
                >
                  Live Preview
                </Link>
              </div>
            ))}
            <Separator className="mt-4" />

            <Contact />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
