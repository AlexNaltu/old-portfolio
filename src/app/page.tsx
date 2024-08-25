import { Badge } from "@/components/ui/badge";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper className="max-w-[1000px]">
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
          <p className="my-4 text-sm">
            Hello, I am Naltu Alexandru, a 19-year-old Frontend Developer based
            in Germany. I am a self-taught developer with a passion for building
            beautiful and responsive websites. I have been coding for 1 year and
            3 months, starting with a 5-month training course that helped me
            learn the basics of web development.
          </p>
          <h2 className="text-lg font-black">Projects: </h2>
        </div>
      </Wrapper>
    </>
  );
}
