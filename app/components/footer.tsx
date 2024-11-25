import { cn } from "app/utils";
import { ArrowIcon } from "./arrow_icon";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 flex-col w-full max-w-4xl flex items-center lg:mx-auto">
      <Image src="/jinx_doodle.svg" alt="jinx doodle" width={218} height={93} />
      <ul
        className={cn(
          "font-sm flex space-x-0 space-y-2 text-neutral-600",
          "space-x-4 space-y-0 dark:text-neutral-300",
        )}
      >
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/daze17"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <p className="text-neutral-600 dark:text-neutral-300">
        Built by Bilguun © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
