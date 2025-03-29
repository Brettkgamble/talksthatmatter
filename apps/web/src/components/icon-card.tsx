/* eslint-disable prettier/prettier */
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

import type { PagebuilderType } from "@/types";

import { SanityImage } from "./sanity-image";

export type CTACardProps = {
  card: NonNullable<PagebuilderType<"imageLinkCards">["cards"]>[number];
  className?: string;
};

export function IconCard({ card, className }: CTACardProps) {
  const { image, href } = card ?? {};
  return (
    <Link
      href={href ?? "#"}
      className={cn(
        "rounded-3xl p-4 p-8 transition-colors relative overflow-hidden group flex flex-col justify-end h-[50px]",
        className,
      )}
    >
      {image?.asset && (
        <div className="absolute inset-0 z-[1] ">
          <SanityImage
            asset={image}
            loading="eager"
            priority
            quality={100}
            fill
            className=" w-full rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        </div>
      )}
    </Link>
  );
}
