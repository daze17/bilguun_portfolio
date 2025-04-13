import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { cn } from "@/utils";

import AboutMeLayout from "./about_me_layout";
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
            {t("about.my_name")}
          </h1>
          <p>{t("about.me_description")}</p>
        </div>
      </div>
      <SkillSection />

      {/* <h1
        className={cn(
          "text-5xl md:text-8xl",
          "font-semibold mt-52 mb-12 tracking-tighter text-center",
        )}
      >
        {t("about.more")}
      </h1>

      <AboutMeLayout /> */}
    </section>
  );
};

export default AboutPage;
