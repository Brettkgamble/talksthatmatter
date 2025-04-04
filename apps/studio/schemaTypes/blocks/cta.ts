import { PhoneIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

import { buttonsField, richTextField } from "../common";

export const cta = defineType({
  name: "cta",
  type: "object",
  icon: PhoneIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description:
        "The smaller text that sits above the title to provide context",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The large text that is the primary focus of the block",
    }),
    defineField({
      name: "titleHighlight",
      type: "boolean",
      initialValue: false,
      title: "Title Highlight",
    }),
    defineField({
      name: "backgroundDark",
      type: "boolean",
      initialValue: false,
      title: "Background Dark or Muted",
    }),
    richTextField,
    buttonsField,
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "CTA Block",
    }),
  },
});
