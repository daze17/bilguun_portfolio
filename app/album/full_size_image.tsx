"use client";

import { Button } from "app/components/ui/button";
import { cn } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const FullSizeImage: React.FC<{
  imageName?: string;
  imageUrl: string;
}> = ({ imageName, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        setIsModalOpen(false); // Set the state to false when "Escape" key is pressed
      }
    };

    // Add event listener for keydown events
    window.addEventListener("keydown", handleEsc);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // const imageUrl = URL.createObjectURL(data.body);

  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-100 shadow-md">
      <div className="rounded-lg bg-white shadow">
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <Image
            src={imageUrl}
            alt={`${imageName}-preview`}
            width={500}
            height={500}
            className="w-80 h-80 object-cover"
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",
            "m-0 flex h-screen w-screen max-w-full p-0",
            "rounded-none border-none bg-black/70",
          )}
        >
          <div
            className={cn(
              "absolute top-0 z-10 flex w-full items-center justify-between px-5 py-4 text-white",
              "z-10 bg-gradient-to-b from-black/60 to-transparent",
            )}
          >
            <h1
              className={cn(
                "line-clamp-3 max-w-[150px] whitespace-normal break-words",
                "md:line-clamp-2 md:max-w-[300px]",
              )}
            >
              {imageName}
            </h1>
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
              >
                X{/*<XIcon className="h-8 w-8" strokeWidth={1} />*/}
                <span className="sr-only">Close modal</span>
              </Button>
            </div>
          </div>
          <div className="z-0 flex h-full w-full justify-center">
            <div className="relative flex aspect-video h-full max-w-3xl items-center justify-center">
              <Image
                src={imageUrl}
                alt={`${imageName}-full`}
                width="0"
                height="0"
                sizes="100vw"
                className={cn(
                  "h-auto max-h-[90vh] w-auto max-w-[95vw] p-5",
                  "md:p-0",
                )}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullSizeImage;
