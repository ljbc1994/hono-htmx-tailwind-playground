import { Context } from "hono";
import { marked } from "marked";

import Post from "../pages/Post";
import { Env } from "../types/Bindings";
import { getEnv } from "../utils/getEnv";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param("id");

  const path = `posts/${id}.md`;

  const env = getEnv(c.env)

  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${env.GH_OWNER}/${env.GH_REPO}/main/${path}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${env.GH_AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        },
      }
    );

    if (!response.ok) {
      return c.render(<Post content="Not found" />, { title: "Not Found" });
    }

    const data = (await response.text()) as string;

    const html = marked.parse(data);

    return c.render(<Post content={html} />, { title: "Example" });
  } catch (err) {
    return c.render(<Post content="Error" />, { title: "Not Found" });
  }
};
