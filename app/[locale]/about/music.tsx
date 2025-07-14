import Image from "next/image";

import { cn } from "@/utils";

// TODO: add translations
const SpotifySection: React.FC = () => {
  return (
    <>
      <div className="flex justify-center gap-5 mt-52 mb-12">
        <Image src="/spotify.svg" alt="crow" width={50} height={50} />
        <h1
          className={cn(
            "text-3xl md:text-5xl",
            "font-semibold tracking-tighter text-center",
          )}
        >
          playlist.
        </h1>
      </div>
      <iframe
        className="rounded-xl"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1Epq3gkK8YBZ0p?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default SpotifySection;
