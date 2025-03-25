/* eslint-disable prettier/prettier */
import { Images } from "lucide-react";
import { defineField, defineType } from "sanity";

export const splitImage = defineType({
  name: "splitImage",
  type: "object",
  icon: Images,
  fields: [
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "title",
      type: "string",
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
