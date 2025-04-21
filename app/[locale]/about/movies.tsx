"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";
import { cn } from "@/utils";

// TODO: add translations
const FavMoviesSection: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <h1
        className={cn(
          "text-3xl md:text-5xl",
          "font-semibold mt-52 mb-12 tracking-tighter text-center",
        )}
      >
        favorite movies.
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
};

export default FavMoviesSection;

const MovieDetail: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <MovieDetail
        title="Fight Club"
        description="Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/about_me/fight_club_wide.jpg",
  },
  {
    id: 2,
    content: (
      <MovieDetail
        title="Old Boy"
        description="A man attempts to find the identity of the person who keeps him captive for several years for no rhyme or reason. Later, he receives money and is released, unaware of the fate that awaits him."
      />
    ),
    className: "col-span-1",
    thumbnail: "/about_me/oldboy.jpg",
  },
  {
    id: 3,
    content: (
      <MovieDetail
        title="Good Will Hunting"
        description="Will Hunting, a janitor at MIT, is a mathematical genius. But circumstances force him to join therapeutic sessions, where he confronts his past, re-evaluates his present and thinks of his future."
      />
    ),
    className: "col-span-1",
    thumbnail: "/about_me/good_will_hunting.jpeg",
  },
  {
    id: 4,
    content: (
      <MovieDetail
        title="A Moment to Remember"
        description="Su-Jin and Chul-Soo's relationship and marriage is put to the test when Su-Jin is diagnosed with early-onset Alzheimer's disease."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/about_me/a_moment_to_remember.jpg",
  },
  {
    id: 5,
    content: (
      <MovieDetail
        title="Breaking Bad"
        description="Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse."
      />
    ),
    className: "col-span-1",
    thumbnail: "/about_me/breaking_bad_poster.jpeg",
  },
  {
    id: 6,
    content: (
      <MovieDetail
        title="Very Ordinary Couple"
        description="After a trivial quarrel, co-workers Dong-hee and Young decide to take a break from their relationship. But they realise that they still love each other as their attempts to find new partners fail."
      />
    ),
    className: "col-span-1",
    thumbnail: "/about_me/very_ordinary_couple.jpg",
  },
  {
    id: 7,
    content: (
      <MovieDetail
        title="On the Beach at Night Alone"
        description="After a publicized affair with her director, an actress leaves South Korea and goes to Hamburg, where she gains insight into the meanings of love and identity."
      />
    ),
    className: "col-span-1",
    thumbnail: "/about_me/on_the_beach_at_night_alone.jpg",
  },
  {
    id: 8,
    content: (
      <MovieDetail
        title="Before Sunrise"
        description="While travelling on a train in Europe, Jesse, an American man, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/about_me/before_sunrise.jpeg",
  },
  // on_the_beach_at_night_alone.jpg
];
