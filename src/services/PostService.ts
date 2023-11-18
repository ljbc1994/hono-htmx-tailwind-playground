import { Bindings } from "../types/Bindings";
import { getKebabCase } from "../utils/getKebabCase";

export class PostService {
  private env: Partial<Bindings> = {};

  constructor({ env }: { env?: Partial<Bindings> }) {
    if (env) {
      this.env = env;
    }
  }

  public async getPostById(id: string) {
    const path = `posts/${getKebabCase(id)}.md`;

    try {
      if (import.meta.env.DEV) {
        const file = (await import("fs")).readFileSync(`./${path}`);
        return file.toString("utf-8");
      } else {
        const response = await fetch(
          `https://raw.githubusercontent.com/${this.env.GH_OWNER}/${this.env.GH_REPO}/main/${path}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${this.env.GH_AUTH_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 404) {
          return null;
        }

        return (await response.text()) as string;
      }
    } catch (err) {
      throw err;
    }
  }
}
