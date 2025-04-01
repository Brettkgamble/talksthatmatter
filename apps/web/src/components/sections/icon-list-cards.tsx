/* eslint-disable prettier/prettier */
import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";

import type { PagebuilderType } from "@/types";

import { IconCard } from "../icon-card";
import { RichText } from "../richtext";

export type ImageLinkCardsProps = PagebuilderType<"imageLinkCards">;

export function IconListCards({
  richText,
  title,
  eyebrow,
  cards,
}: ImageLinkCardsProps) {
  return (
    <section id="image-link-cards" className="-mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex w-full flex-col items-center">
          {/* Social Media Grid */}
          {Array.isArray(cards) && cards.length > 0 && (
            <div className="mt-16 grid w-3/5 sm:w-full sm:gap-4 lg:gap-16 grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {cards?.map((card, idx) => (
                <IconCard
                  key={card._key}
                  card={card}
                  className={cn(
                    idx === 0 && "lg:rounded-l-3xl lg:rounded-r-none",
                    idx === cards.length - 1 &&
                      "lg:rounded-r-3xl lg:rounded-l-none",
                    idx !== 0 && idx !== cards.length - 1 && "lg:rounded-none",
                  )}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mt-20 flex relative pl-3  flex-nowwrap justify-center list-none max-w-1200 m-auto">
            <svg className="" width="1" height="110" viewBox="0 0 1 110" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499995" y2="110" stroke="#585858"
                      strokeDasharray="5 5"></line>
            </svg>
        </div>
      </div>
    </section>
  );
}
