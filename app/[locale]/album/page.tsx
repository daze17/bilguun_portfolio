import { getTranslations } from "next-intl/server";

import FullSizeImage from "./full_size_image";

const AlbumPage: React.Page = async () => {
  const t = await getTranslations();
  // TODO: source path
  const images = [
    {
      name: "work",
      url: "/album/work.jpeg",
    },
    {
      name: "cafe",
      url: "/album/cafe.jpeg",
    },
  ];
  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <h1 className="font-semibold text-2xl my-4 tracking-tighter">
        {t("album.title")}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <FullSizeImage
            key={index}
            imageUrl={image.url}
            imageName={image.name}
          />
        ))}
      </div>
    </section>
  );
};

export default AlbumPage;
