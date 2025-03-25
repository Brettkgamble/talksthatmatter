/* eslint-disable prettier/prettier */
import { Images } from "lucide-react";
import { defineField, defineType } from "sanity";

export const splitImage = defineType({
  name: "splitImage",
  type: "object",
  icon: Images,
  fields: [
    defineField({
      name: "badge",
      type: "string",
      title: "Badge",
    }),
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
          { value: "imageCenter", title: "Image Center"}
        ],
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "titleHighlight",
      type: "boolean",
      initialValue: false,
      title: "Title Highlight",
    }),
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
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title,
      subtitle: "Text and Image",
      media,
    }),
  },
});
