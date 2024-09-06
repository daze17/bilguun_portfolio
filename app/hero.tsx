import { FlipWords } from "app/components/ui/flip_words";

const HeroFlipWords: React.FC = () => {
  const words = ["fast", "skilled", "handsome", "intelligent"];

  // <span className="animate-wave">👋</span>
  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="text-lg lg:text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <h2 className="text-4xl lg:text-7xl">Hi. I'm Bilguun 👋</h2>
        a developer who is <FlipWords words={words} />
      </div>
    </div>
  );
};
export default HeroFlipWords;
