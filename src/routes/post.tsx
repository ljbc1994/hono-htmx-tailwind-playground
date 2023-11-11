import { Context } from "hono";

import type { Env } from "../types/Bindings";
import type { KvPostFeedback } from "../types/KvPostFeedback";

import Post from "../pages/Post";

import { getPostById } from "../api/getPostById";

import { getEnv } from "../utils/getEnv";
import { parseMarkdown } from "../utils/parseMarkdown";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param("id");

  const env = getEnv(c.env);

  try {
    const postFeedback = await c.env!.KV_POST_FEEDBACK.get<KvPostFeedback>(
      id,
      "json"
    );
    const postLikes = postFeedback?.likes ?? 0;

    const data = await getPostById(id, { env });

    if (data == null) {
      return c.render(<Post postId={id} postLikes={0} content="Nope" />, {
        title: "No post found",
      });
    }

    const { html, metadata } = parseMarkdown(data);

    return c.render(<Post postId={id} postLikes={postLikes} content={html} />, {
      title: metadata?.title,
    });
  } catch (err) {
    console.log(err);
    return c.render(<Post postId={id} postLikes={0} content="Error" />, {
      title: "Something went wrong",
    });
  }
};
