import { Context } from "hono";
import { marked } from "marked";

import { Env } from "../types/Bindings";
import { getEnv } from "../utils/getEnv";
import Posts from "../pages/Posts";

export const posts = async (c: Context<Env, "/posts", {}>) => {
  const env = getEnv(c.env);

  try {
    return c.render(<Posts />);
  } catch (err) {
    console.log(err);
    return c.render(<Posts />);
  }
};
