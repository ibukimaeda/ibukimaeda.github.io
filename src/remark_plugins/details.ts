/// <reference types="mdast-util-directive" />

import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { ElementContent } from "hast";
import { toHast } from "mdast-util-to-hast";

export default function remarkDetails() {
  return (tree: Root) => {
    visit(tree, "containerDirective", (node) => {
      if (node.name !== "details") return;

      const summary = node.attributes?.summary || "";

      const convertedChildren = node.children
        .map((child) => toHast(child))
        .filter((node): node is ElementContent => node !== null);

      node.data = {
        hName: "details",
        hChildren: [
          {
            type: "element",
            tagName: "summary",
            properties: {},
            children: [{ type: "text", value: summary }],
          },
          {
            type: "element",
            tagName: "div",
            properties: { className: ["details-content"] },
            children: convertedChildren,
          },
        ],
      };
    });
  };
}
