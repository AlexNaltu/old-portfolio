import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
        <div>
          <section>
            <Image src="/hellofriend.svg" alt="Hero" width={350} height={300} />
            <h1>Naltu Alexandru's Portfolio</h1>
          </section>
        </div>
      </Wrapper>
    </>
  );
}
