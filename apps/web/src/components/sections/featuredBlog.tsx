import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";

type featuredBlogProps = PagebuilderType<"featuredBlog">;

export function FeaturedBlog({ blog, title }: featuredBlogProps) {
  // console.log("blog", blog);
  // console.log("title", title);
  return (
    <section id="features" className="my-6 md:my-16">
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
          <div className="text-center max-w-3xl mx-auto space-y-8">
            {/* {eyebrow && (
              <Badge
                variant="secondary"
                className="bg-zinc-200 dark:text-black"
              >
                {eyebrow}
              </Badge>
            )} */}
            <h2 className="text-5xl font-semibold md:text-7xl text-balance  text-yellow-400">
              {title}
            </h2>
            {/* <div className="text-lg text-muted-foreground">
              <RichText richText={richText} className="text-balance" />
            </div>
            <div className="flex justify-center">
              <SanityButtons
                buttons={buttons}
                buttonClassName="w-full sm:w-auto"
                className="w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-start mb-8"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
