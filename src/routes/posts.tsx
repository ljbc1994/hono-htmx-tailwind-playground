import type { Context } from "hono";
import type { Env } from "../types/Bindings";

import Posts from "../pages/Posts";

export const posts = async (c: Context<Env, "/posts", {}>) => {
  try {
    const postsMetadata = await c
      .get("postMetadataService")
      .getMetadataByDateDescending();

    return c.render(<Posts posts={postsMetadata} />);
  } catch (err) {
    console.log(err);
    return c.render(<Posts posts={[]} />);
  }
};
