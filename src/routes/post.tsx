import { Context } from "hono";
import { marked } from "marked";

import Post from "../pages/Post";
import { Env } from "../types/Bindings";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param("id");

  const path = `posts/${id}.md`;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${c.env?.GH_OWNER}/${c.env?.GH_REPO}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${c.env?.GH_AUTH_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return c.render(<Post content="Not found" />, { title: "Not Found" });
    }

    const data = (await response.json()) as { content: string };

    const content = Buffer.from(data.content, "base64").toString("utf-8");

    const html = marked.parse(content);

    c.res.headers.set("Cache-Control", "public, s-maxage=604800");

    return c.render(<Post content={html} />, { title: "Example" });
  } catch (err) {
    return c.render(<Post content="Error" />, { title: "Not Found" });
  }
};
