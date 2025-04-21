import { cn } from "@/utils";

// TODO: add translations
const SpotifySection: React.FC = () => {
  return (
    <>
      <h1
        className={cn(
          "text-3xl md:text-5xl",
          "font-semibold mt-52 mb-12 tracking-tighter text-center",
        )}
      >
        playlist.
      </h1>
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
