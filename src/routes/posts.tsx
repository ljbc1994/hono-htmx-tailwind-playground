import { Context } from "hono";

import { Env } from "../types/Bindings";
import { getEnv } from "../utils/getEnv";
import Posts from "../pages/Posts";
import { PostMetadataService } from "../services/PostMetadataService";

export const posts = async (c: Context<Env, "/posts", {}>) => {
  const postsMetadata = await new PostMetadataService({
    env: getEnv(c.env),
  }).getMetadata();

  try {
    return c.render(<Posts posts={postsMetadata} />);
  } catch (err) {
    console.log(err);
    return c.render(<Posts posts={[]} />);
  }
};
