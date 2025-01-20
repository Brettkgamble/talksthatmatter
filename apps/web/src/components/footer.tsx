import { sanityFetch } from "@/lib/sanity/live";
import { queryFooterData } from "@/lib/sanity/query";
import type { QueryFooterDataResult } from "@/lib/sanity/sanity.types";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://cdn.sanity.io/images/s6kuy1ts/production/68c438f68264717e93c7ba1e85f1d0c4b58b33c2-1200x621.svg";

interface SocialLinksProps {
  data: NonNullable<QueryFooterDataResult>["socialLinks"];
}

interface FooterProps {
  data: NonNullable<QueryFooterDataResult>;
}

async function fetchFooterData() {
  const response = await sanityFetch({
    query: queryFooterData,
  });
  return response;
}

export async function FooterServer() {
  const footerData = await fetchFooterData();
  if (!footerData?.data) return <FooterSkeleton />;
  return <Footer data={footerData.data} />;
}

function SocialLinks({ data }: SocialLinksProps) {
  if (!data) return null;

  const { facebook, twitter, instagram, youtube, linkedin } = data;

  const socialLinks = [
    { url: instagram, Icon: Instagram },
    { url: facebook, Icon: Facebook },
    { url: twitter, Icon: Twitter },
    { url: linkedin, Icon: Linkedin },
    { url: youtube, Icon: Youtube },
  ].filter((link) => link.url);

  return (
    <ul className="flex items-center space-x-6 text-muted-foreground">
      {socialLinks.map(({ url, Icon }) => (
        <li key={url} className="font-medium hover:text-primary">
          <Link
            href={url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function FooterSkeleton() {
  return (
    <section className="pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <footer className="h-[500px]">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className="h-[40px] w-[80px] bg-muted rounded animate-pulse" />
                </span>
                <div className="mt-6 h-16 w-full bg-muted rounded animate-pulse" />
              </div>
              <div className="flex items-center space-x-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 bg-muted rounded animate-pulse"
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {[1, 2, 3].map((col) => (
                <div key={col}>
                  <div className="mb-6 h-6 w-24 bg-muted rounded animate-pulse" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="h-4 w-full bg-muted rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center lg:flex-row lg:items-center lg:text-left">
            <div className="h-4 w-48 bg-muted rounded animate-pulse" />
            <div className="flex justify-center gap-4 lg:justify-start">
              <div className="h-4 w-32 bg-muted rounded animate-pulse" />
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function Footer({ data }: FooterProps) {
  const { subtitle, columns, socialLinks, logo, siteTitle } = data;
  const year = new Date().getFullYear();

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <footer className="h-[500px]">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Image
                    src={logo ?? LOGO_URL}
                    alt={`${siteTitle} logo`}
                    width={80}
                    height={40}
                    priority
                  />
                </span>
                {subtitle && (
                  <p className="mt-6 text-sm text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>
              {socialLinks && <SocialLinks data={socialLinks} />}
            </div>
            {columns && columns?.length > 0 && (
              <div className="grid grid-cols-3 gap-6 lg:gap-20">
                {columns.map((column) => (
                  <div key={column._key}>
                    <h3 className="mb-6 font-bold">{column.title}</h3>
                    {column.links && column.links.length > 0 && (
                      <ul className="space-y-4 text-sm text-muted-foreground">
                        {column.links.map((link) => (
                          <li
                            key={link._key}
                            className="font-medium hover:text-primary"
                          >
                            <Link
                              href={link.href ?? "#"}
                              target={
                                link.openInNewTab
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                link.openInNewTab
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>
              © {year} {siteTitle}. All rights reserved.
            </p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
