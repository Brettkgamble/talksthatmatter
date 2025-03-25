/* eslint-disable prettier/prettier */
import { stegaClean } from "next-sanity";

import type { PagebuilderType } from "@/types";

import { SanityImage } from "../sanity-image";
import { Badge } from "@workspace/ui/components/badge";

type SplitImageProps = PagebuilderType<"splitImage">;

export function SplitImage({ badge, title, titleHighlight, image, orientation }: SplitImageProps) {
  return (
    <section
      className="container mx-auto flex gap-8 py-16 data-[orientation='imageRight']:flex-row-reverse data-[orientation='imageCenter']:flex-col"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4 items-center justify-items-center text-center lg:items-start lg:justify-items-start lg:text-left">
        <Badge variant="secondary">{badge}</Badge>
        <div className="grid gap-4">
          <h1 className={`text-4xl lg:text-6xl font-semibold text-balance ${!titleHighlight ? 'text-white' : 'text-yellow-400'}`}>
            {title}
          </h1>
        </div>
      </div>
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
      
      {/* <div className="w-1/3 flex items-center">
        {title ? (
          <h2 className="text-3xl mx-auto md:text-5xl lg:text-8xl font-light text-pink-500 text-pretty max-w-3xl">
            {title}
          </h2>
        ) : null}
      </div> */}
    </section>
  );
}
