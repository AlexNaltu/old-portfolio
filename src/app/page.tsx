import { IconCloudComponent } from "@/components/cloud/icon-cloud";
import DotPattern from "@/components/magicui/dot-pattern";
import { Badge } from "@/components/ui/badge";
import Wrapper from "@/components/wrapper/wrapper";
import { aboutMe, websites } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper className="max-w-[1000px] relative">
        <div>
          <section className="flex items-center gap-2">
            <Image src="/logo.png" alt="Hero" width={60} height={60} />
            <div>
              <h1 className="font-black">Naltu Alexandru's Portfolio</h1>

              <Badge className="bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border-2 transition-all duration-200 ease-linear cursor-pointer">
                Based in: Germany
              </Badge>
            </div>
          </section>
          <div>
            <h3 className="my-3 text-lg font-black">About Me:</h3>
            {aboutMe.map((item, i) => (
              <div key={i} className="text-sm flex gap-2">
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="my-4 text-sm font-semibold">
            Hello, I am Naltu Alexandru, a 19-year-old Frontend Developer based
            in Germany. I am a self-taught developer with a passion for building
            beautiful and responsive websites. I have been coding for 1 year and
            3 months, starting with a 5-month training course that helped me
            learn the basics of web development.
          </p>
          <IconCloudComponent />
          <h2 className="text-lg font-black">Projects: </h2>
          <div>
            {websites.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mt-4 flex-wrap">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge, i) => (
                    <Badge
                      key={i}
                      className="bg-black text-white flex-shrink my-2"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />
      </Wrapper>
    </>
  );
}
