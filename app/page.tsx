import Image from "next/image";
import HeroFlipWords from "./hero";

const HomePage: React.Page = () => {
  return (
    <div className="h-[calc(100dvh-210px)]">
      <HeroFlipWords />
    </div>
  );
};
export default HomePage;
