import HeroFlipWords from "./hero";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

const HomePage: React.Page = () => {
  return (
    <BackgroundBeamsWithCollision className="h-[calc(100dvh-210px)]">
      <HeroFlipWords />
    </BackgroundBeamsWithCollision>
  );
};
export default HomePage;
