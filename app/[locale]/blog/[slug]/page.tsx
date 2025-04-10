import { baseUrl } from "app/sitemap";
import { formatDate } from "app/utils";
import { notFound } from "next/navigation";
import readingDuration from "reading-duration";

import { getBlogPosts } from "@/[locale]/blog/utils";
import { CustomMDX } from "@/components/mdx";

// export const generateStaticParams = async () => {
//   const posts = getBlogPosts("en");

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

export const generateMetadata = async ({ params }) => {
  const { slug, locale } = await params;
  const post = getBlogPosts(locale).find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

const BlogDetail: React.Page<{ slug: string }> = async ({ params }) => {
  const { slug, locale } = await params;
  const post = getBlogPosts(locale).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  const readingTime = readingDuration(post.content, {
    emoji: false,
  });

  return (
    <section className="w-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/${locale}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="w-full bg-gradient-to-tl from-black via-zinc-900 to-black">
        <div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                {post.metadata.title}
              </h1>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {/*TODO link */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 max-w-4xl sm:mx-auto">
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
            {" · "}
            {readingTime}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
