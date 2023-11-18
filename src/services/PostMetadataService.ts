import { Bindings } from "../types/Bindings";
import { PostMetadata } from "../types/PostManifest";

export class PostMetadataService {
  private env: Partial<Bindings> = {};

  constructor({ env }: { env?: Partial<Bindings> }) {
    if (env) {
      this.env = env;
    }
  }

  public async getMetadata(): Promise<PostMetadata[]> {
    if (import.meta.env.DEV) {
      const file = (await import("fs")).readFileSync(
        `./public/static/posts-manifest.json`
      );
      return JSON.parse(file.toString("utf-8")) as PostMetadata[];
    }

    const response = await fetch(
      `${this.env.CF_PAGES_URL}/static/posts-manifest.json`,
      { method: "GET" }
    );

    const content = await response.json();

    return content as PostMetadata[];
  }

  public async getMetadataByDateDescending() {
    const metadata = await this.getMetadata();
    return metadata.toSorted((a, b) => +new Date(b.date) - +new Date(a.date));
  }

  public async getPostMetadataDetailsById(id: string): Promise<{
    post: PostMetadata | undefined;
    relatedPosts: PostMetadata[];
  }> {
    const metadata = await this.getMetadata();
    const postIndex = metadata?.findIndex(
      (postMetadata) => postMetadata.slug === id
    );

    const post = metadata[postIndex];

    const prevPost = metadata[postIndex - 1];
    const nextPost = metadata[postIndex + 1];

    return {
      post,
      relatedPosts: [prevPost, nextPost].filter(Boolean),
    };
  }
}
