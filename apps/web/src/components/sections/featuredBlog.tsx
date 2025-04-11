import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";

type featuredBlogProps = PagebuilderType<"featuredBlog">;

export function FeaturedBlog({ blog, title, episode, liveDate }: featuredBlogProps) {
  // console.log("blog", blog);
  // console.log("title", title);
  return (
    <section id="featuredblog" className="my-6 -mt-16 md:-mt-4">
      <div className="relative text-center">
        {/* {image && (
          <div className="h-96 w-full">
            <SanityImage
              asset={image}
              loading="eager"
              fill
              priority
              quality={80}
            />
          </div>
        )} */}
        <div className="w-full absolute top-0 left-0 text-center mt-10">
          <div className="flex items-center justify-center  ">
            <span className="text-sm font-semibold md:text-lg text-balance text-white mr-[10px]">
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
      </div>
    </section>
  );
}
