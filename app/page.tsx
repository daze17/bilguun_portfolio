import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import HeroFlipWords from "./hero";

const HomePage: React.Page = () => {
  return (
    <BackgroundBeamsWithCollision className="h-[calc(100dvh-210px)]">
      <HeroFlipWords />
    </BackgroundBeamsWithCollision>
  );
};
export default HomePage;
