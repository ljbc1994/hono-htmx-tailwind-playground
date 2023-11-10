import { Context } from "hono";
import { marked } from "marked";

import Post from "../pages/Post";
import { Env } from "../types/Bindings";
import { getEnv } from "../utils/getEnv";
import { getPostByContent } from "../api/getPostByContent";
import { KvPostFeedback } from "../types/KvPostFeedback";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param("id");

  const env = getEnv(c.env);

  try {
    const postFeedback = await c.env!.KV_POST_FEEDBACK.get<KvPostFeedback>(
      id,
      "json"
    );
    const postLikes = postFeedback?.likes ?? 0;

    const data = await getPostByContent(id, { env });

    if (data == null) {
      return c.render(<Post postId={id} postLikes={0} content="Nope" />, {
        title: "Example",
      });
    }

    const html = marked.parse(data);

    return c.render(<Post postId={id} postLikes={postLikes} content={html} />, {
      title: "Example",
    });
  } catch (err) {
    console.log(err);
    return c.render(<Post postId={id} postLikes={0} content="Error" />, {
      title: "Not Found",
    });
  }
};
