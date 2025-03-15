import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from "@microflash/remark-callout-directives"

import remarkDetails from "./src/remark_plugins/details";


// https://astro.build/config
export default defineConfig({
  site: "https://ibukimaeda.github.io",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkCalloutDirectives, remarkDetails],
    rehypePlugins: [rehypeKatex],
  },
});
