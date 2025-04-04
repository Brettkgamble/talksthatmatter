import Link from "next/link";

import type { PagebuilderType } from "@/types";

type featuredBlogProps = PagebuilderType<"featuredBlog">;


export function FeaturedBlog({ blog }: featuredBlogProps) {
    return (
      <div className="w-1/3 flex items-center">
          <h2 className="text-3xl mx-auto md:text-5xl lg:text-8xl font-light text-pink-500 text-pretty max-w-3xl">
            This is a big deal
          </h2>
      </div>
    );
}
