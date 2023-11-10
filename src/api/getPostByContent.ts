import { Bindings } from "../types/Bindings";
import { getKebabCase } from "../utils/getKebabCase";

export async function getPostByContent(id: string, { env }: { env: Partial<Bindings> }) {
  const path = `posts/${getKebabCase(id)}.md`;

  try {
    if (import.meta.env.DEV) {
      const file = (await import("fs")).readFileSync(`./${path}`);
      return file.toString("utf-8");
    } else {
      const response = await fetch(
        `https://raw.githubusercontent.com/${env.GH_OWNER}/${env.GH_REPO}/main/${path}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${env.GH_AUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 404) {
        return null
      }

      return (await response.text()) as string;
    }
  } catch (err) {
    throw err;
  }
}
