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
      <div className="flex justify-center gap-5">
        <Image src="/crow_1.svg" alt="crow" width={120} height={120} />
        <h1
          className={cn(
            "text-5xl md:text-8xl",
            "font-semibold my-4 tracking-tighter text-center",
          )}
        >
          {t("about.title")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-36 items-start my-16">
        <div className="relative h-[420px] md:h-[500px]">
          <Image
            src={"/bilguun_pfp.jpg"}
            alt={"my-image"}
            width={280}
            height={350}
            className="absolute top-8 left-0 rounded-lg object-cover shadow-xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10"
          />
          <Image
            src={"/hiking_2.jpeg"}
            alt={"hiking"}
            width={280}
            height={350}
            className="absolute top-0 right-0 md:left-52 rounded-lg object-cover shadow-xl rotate-6 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col justify-center h-full">
          <h1 className="font-semibold text-5xl tracking-tighter my-5">
            {t("about.my_name")}
          </h1>
          <p>{t("about.me_description")}</p>
          <p>
            Outside of coding, I love traveling, hiking, experimenting in the
            kitchen, reading manga, watching anime and gaming.
          </p>
        </div>
      </div>
      <SkillSection />
      <div className="flex justify-center gap-5 mt-36 mb-12">
        <Image src="/cat.svg" alt="crow" width={90} height={90} />
        <h1
          className={cn(
            "text-5xl md:text-8xl",
            "font-semibold tracking-tighter text-center",
          )}
        >
          {t("about.more")}
        </h1>
      </div>
      {/* TODO: make component */}
      <iframe
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/WMMTls5WSO4"
        title="A CRAZY Self-Belief..."
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <blockquote className="text-2xl md:text-3xl font-bold text-center my-8 italic">
        "Cause my life is dope, and I do dope shit."
      </blockquote>
      <p className="text-center text-lg max-w-2xl mx-auto">
        It feels like I chose my major because I want to create something great.
        I wanted to have the ambition to make the impossible possible with my
        coding skills. I want to be a part of something bigger than myself. I
        want to make a difference in the world.
      </p>
      <FavMoviesSection />
      <SpotifySection />
    </section>
  );
};

export default AboutPage;
