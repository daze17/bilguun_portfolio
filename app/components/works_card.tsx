import Link from "next/link";
import Image from "next/image";
import { Metadata } from "app/schema/metadata";

type Props = {
  post: {
    metadata: Metadata;
    slug: string;
    content: string;
  };
};
export const WorksCard: React.FC<Props> = ({ post }) => {
  return (
    <Link key={post.slug} className="mb-4" href={`/work/${post.slug}`}>
      <div className="flex flex-col gap-2">
        {post.metadata.image ? (
          <Image
            width={400}
            height={500}
            className="w-full h-48 rounded-b-lg"
            alt={post.slug}
            src={post.metadata.image}
          />
        ) : (
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
        )}
        <div className="w-full flex flex-col md:flex-col space-x-0 ">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {post.metadata.title}
          </p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400 tabular-nums">
            {post.metadata.summary}
          </p>
        </div>
      </div>
    </Link>
  );
};
