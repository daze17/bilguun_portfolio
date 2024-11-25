import { FlipWords } from "app/components/ui/flip_words";
import { cn } from "./utils";
import Image from "next/image";

const HeroFlipWords: React.FC = () => {
  const words = ["creative", "efficient", "passionate", "dedicated"];

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
            Hi. I'm{" "}
            <span className="font-['Open_Sans'] font-bold">Bilguun</span>
          </h2>
          <Image src="/heart.svg" alt="heart" width={50} height={50} />
        </div>
        a developer who is <FlipWords words={words} />
      </div>
    </div>
  );
};
export default HeroFlipWords;
