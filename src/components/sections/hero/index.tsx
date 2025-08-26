import Image from "next/image";
import { ExpandableText } from "./expandableText";

export const Hero = () => {
  return (
    <section className="pt-6 pb-[30px] md:py-[76px] rounded-[24px] bg-[linear-gradient(345deg,#F7F1F3_22.44%,#E6EFFE_89.37%)]">
        <div className="container">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-[0.6fr_0.4fr] md:gap-5">
                <div className="flex flex-col gap-4">
                  <h1 className="text-title text-[32px] md:text-[64px] leading-none font-[590]">Ranking <br className="md:hidden"/>Najlepszych i Niezawodnych <br /><span className="text-link md:text-title">Hostingów w Polsce</span></h1>
                  <ExpandableText />
                </div>
                <div className="flex items-center justify-center">
                  <Image width={381} height={381} className="w-[140px] h-[140px] md:w-full md:h-full md:max-h-[380px]" src="/hero.svg" alt="Hero"/>
                </div>
            </div>
        </div>
    </section>
  );
};

