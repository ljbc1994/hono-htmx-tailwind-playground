import { marked } from "marked";
import { extractor } from "./getFrontMatter";
import { PostMetadata } from "../types/PostManifest";

export function parseMarkdown(markdown: string): {
  html: string;
  metadata?: PostMetadata;
} {
  let metadata: PostMetadata | undefined = undefined;

  const html = marked.parse(markdown, {
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
