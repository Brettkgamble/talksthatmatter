import type { PagebuilderType } from "@/types";

import { AudioPlayer } from "../custom/AudioPlayer";
import { RichText } from "../richtext";
import { SanityImage } from "../sanity-image";

type featuredBlogProps = PagebuilderType<"featuredBlog">;

export function FeaturedBlog({
  blog,
  title,
  episode,
  liveDate,
}: featuredBlogProps) {
  return (
    <section id="featuredblog">
      <div className="relative text-center">
        <div className="w-full absolute top-0 left-0 text-center -mt-10">
          <div className="flex items-center justify-center  ">
            <span className="text-sm font-mono uppercase md:text-lg text-balance text-white mr-[10px]">
              {title}
            </span>
            <h2 className="text-5xl font-semibold md:text-7xl text-balance  text-yellow-400">
              {episode}
            </h2>
            <h2 className="text-sm font-semibold md:text-lg text-balance text-white ml-[10px]">
              {liveDate}
            </h2>
          </div>
        </div>
        <div className="container flex-col-reverse mx-auto mt-12 flex gap-8 py-16 md:flex-row-reverse ">
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4 items-center justify-items-center text-left lg:items-start lg:justify-items-start">
            <div className="grid gap-4">
              <h1 className={`text-4xl lg:text-6xl font-semibold text-balance`}>
                {blog?.title}
              </h1>
              <RichText
                richText={blog?.richText}
                className="text-base md:text-lg font-normal"
              />
            </div>
          </div>
          {blog?.image && (
            <div className="md:h-96 w-4/5 mx-auto border-2 border-white overflow-hidden">
              <SanityImage
                asset={blog?.image}
                loading="eager"
                width={600}
                height={600}
                priority
                quality={100}
                className="max-h-96 w-full rounded-3xl object-contain
                "
              />
            </div>
          )}
        </div>
        <div>
          <AudioPlayer track="https://cdn.simplecast.com/audio/891a8679-333d-44ea-b75f-b1a674ae4218/episodes/d527188a-3f49-4ff6-9c7c-059d4a8af67d/audio/f1f96553-8dbf-44f5-b8fb-3958c363d6a6/default_tc.mp3" />
        </div>
      </div>
    </section>
  );
}
