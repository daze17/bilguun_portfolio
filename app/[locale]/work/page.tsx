import { getTranslations } from "next-intl/server";

import { WorksCard } from "@/components/works_card";

import { getWorkPosts } from "./utils";

export const metadata = {
  title: "Work",
  description: "See my works.",
};

const WorksPage: React.Page = async ({ params }) => {
  const { locale } = await params;
  let allWorks = getWorkPosts(locale);

  const t = await getTranslations();

  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased max-w-4xl mx-4 lg:mx-auto lg:py-12">
      <h1 className="font-semibold text-2xl my-4 tracking-tighter">
        {t("work.title")}
      </h1>
      <div className="grid gap-5 md:grid-cols-3 md:gap-10">
        {allWorks
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <WorksCard post={post} key={post.slug} />
          ))}
      </div>
    </section>
  );
};

export default WorksPage;
