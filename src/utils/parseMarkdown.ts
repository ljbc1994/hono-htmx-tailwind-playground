import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

import { extractor } from "./getFrontMatter";
import type { PostMetadata } from "../types/PostManifest";

const renderer = {
  heading(text: string, level: string) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

    return `
      <h${level} class="group">
        <a name="${escapedText}" class="text-sky-700 hover:text-sky-400 no-underline transition opacity-0 group-hover:opacity-100 absolute -pl-6 md:-ml-8" href="#${escapedText}">
          <span class="header-link">#</span>
        </a>
        ${text}
      </h${level}>`;
  },
};

export async function parseMarkdown(markdown: string): Promise<{
  html: string;
  metadata?: PostMetadata;
}> {
  let metadata: PostMetadata | undefined = undefined;

  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  marked.use({ renderer });

  const html = await marked.parse(markdown, {
    hooks: {
      preprocess(markdown) {
        const { attributes, body } = extractor(markdown);

        metadata = attributes as PostMetadata;

        return body;
      },
      postprocess(markdown) {
        return markdown;
      },
    },
  });

  return { html, metadata };
}
