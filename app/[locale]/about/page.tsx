import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { cn } from "@/utils";

import SkillSection from "./skills";

const AboutPage: React.Page = async () => {
  const t = await getTranslations();
  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <h1
        className={cn(
          "text-5xl md:text-8xl",
          "font-semibold my-4 tracking-tighter text-center",
        )}
      >
        {t("about.title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-20 items-start my-20">
        <Image
          // TODO: replace the goddamn image
          src={"/album/cafe.jpeg"}
          alt={"my-image"}
          width={500}
          height={200}
          className="object-contain"
        />

        <div className="flex flex-col justify-center h-full">
          <h1 className="font-semibold text-5xl tracking-tighter my-5">
            {/* TODO: dammit please add the translations */}
            My name is Bilguun
          </h1>
          {/* TODO: dammit please add the translations */}
          <p>
            I was born in Mongolia and studied in a math-focused class during
            high school. I studied Information Systems at the National
            University of Mongolia for 4 years. My interest in tech started
            early — back in middle school, I used to build blogs when platforms
            like Miniih.com and Gogo.mn were popular(iykyk). Now, with almost 4
            years of experience as a full-stack developer based in Ulaanbaatar,
            I enjoy turning complex problems into simple and easy-to-use
            solutions.
          </p>
        </div>
      </div>
      <SkillSection />
    </section>
  );
};

export default AboutPage;
