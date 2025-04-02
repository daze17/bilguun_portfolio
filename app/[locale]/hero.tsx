import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { FlipWords } from "@/components/ui/flip_words";
import { cn } from "@/utils";

const HeroFlipWords: React.FC = async () => {
  const t = await getTranslations();
  // const words = ["creative", "efficient", "passionate", "dedicated"];
  const prefix = t("home.slogan");
  const words = [
    "bridging design & code",
    "crafting digital experiences",
    "building with purpose",
    "transforming ideas",
  ];
  // const words = [
  //   "always learning",
  //   "constantly innovating",
  //   "solving challenges",
  //   "bringing ideas to life",
  // ];

  return (
    <div className="h-full flex justify-center items-center px-4">
      <div
        className={cn(
          "text-lg lg:text-3xl mx-auto font-normal text-neutral-600",
          "dark:text-neutral-400",
        )}
      >
        <div className="flex">
          <h2 className="text-4xl lg:text-7xl">
            {/* Hi. I'm{" "}
            <span className="font-['Open_Sans'] font-bold">Bilguun</span> */}
            {t("home.pre_title")}{" "}
            <span className="font-['Open_Sans'] font-bold">
              {t("home.name")}
            </span>
          </h2>
          <Image src="/heart.svg" alt="heart" width={50} height={50} />
        </div>
        {prefix} <FlipWords words={words} />
      </div>
    </div>
  );
};
export default HeroFlipWords;
