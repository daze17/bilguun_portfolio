import Image from "next/image";
import FullSizeImage from "./full_size_image";

const AlbumPage: React.Page = () => {
  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(7)].map((_, index) => (
          <FullSizeImage key={index} imageName="" />
        ))}
      </div>
    </section>
  );
};

export default AlbumPage;
