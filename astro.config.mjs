import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import astroImageTools from "astro-imagetools"
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
};

// https://astro.build/config
export default defineConfig({
  site: "https://sealgair.dev",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false }), astroImageTools],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]]
  }
})
