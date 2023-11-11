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
      `${this.env.CF_PAGES_URL}/public/static/posts-manifest.json`,
      { method: "GET" }
    );

    const content = await response.json()

    return content as PostMetadata[]
  }
}
