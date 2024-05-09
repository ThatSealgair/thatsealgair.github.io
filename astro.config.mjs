import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import { imageService } from "@unpic/astro/service";

/** @type {import("rehype-pretty-code").Options} */
const options = {
  // See Options section
};

export default defineConfig({
  site: "https://sealgair.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: imageService(),
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]]
  }
});
