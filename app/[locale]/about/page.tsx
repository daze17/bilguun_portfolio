import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { cn } from "@/utils";

import FavMoviesSection from "./movies";
import SpotifySection from "./music";
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
          src={"/bilguun_pfp.jpg"}
          alt={"my-image"}
          width={500}
          height={200}
          className="rounded-lg object-contain"
        />

        <div className="flex flex-col justify-center h-full">
          <h1 className="font-semibold text-5xl tracking-tighter my-5">
            {t("about.my_name")}
          </h1>
          <p>{t("about.me_description")}</p>
        </div>
      </div>
      <SkillSection />
      <h1
        className={cn(
          "text-5xl md:text-8xl",
          "font-semibold mt-52 mb-12 tracking-tighter text-center",
        )}
      >
        {t("about.more")}
      </h1>
      {/* TODO: make component */}
      <div className="grid md:grid-cols-3 gap-5 items-start my-20">
        <Image
          src={"/hiking_2.jpeg"}
          alt={"hiking"}
          width={400}
          height={200}
          className="rounded-lg object-contain"
        />
        <div className="flex flex-col justify-center h-full md:col-span-2">
          <p>
            Outside of coding, I love traveling, hiking, experimenting in the
            kitchen, reading manga, watching anime and gaming.
          </p>
        </div>
      </div>
      <FavMoviesSection />
      <SpotifySection />
    </section>
  );
};

export default AboutPage;
