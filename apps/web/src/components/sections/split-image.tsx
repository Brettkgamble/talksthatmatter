import Image from "next/image";
import { stegaClean } from "next-sanity";

import type { PagebuilderType } from "@/types";

import { SanityImage } from "../sanity-image";

type SplitImageProps = PagebuilderType<"splitImage">;

export function SplitImage({ title, image, orientation }: SplitImageProps) {
  return (
    <section
      className="container mx-auto flex gap-8 py-16 data-[orientation='imageRight']:flex-row-reverse"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {image && (
        <div className="h-96 w-full">
          <SanityImage
            asset={image}
            loading="eager"
            width={800}
            height={800}
            priority
            quality={80}
            className="max-h-96 w-full rounded-3xl object-cover"
          />
        </div>
      )}
      <div className="w-1/3 flex items-center">
        {title ? (
          <h2 className="text-3xl mx-auto md:text-5xl lg:text-8xl font-light text-pink-500 text-pretty max-w-3xl">
            {title}
          </h2>
        ) : null}
      </div>
    </section>
  );
}