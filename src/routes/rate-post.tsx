import { Context } from "hono";

import { Env } from "../types/Bindings";
import { RatePostForm } from "../pages/Post/components/RatePostForm";
import { KvPostFeedback } from "../types/KvPostFeedback";

export const ratePost = async (c: Context<Env, "/rate-post/:id", {}>) => {
  const id = c.req.param("id");

  try {
    const postFeedback = (await c.env!.KV_POST_FEEDBACK.get<KvPostFeedback>(id, "json"))
    const postLikes = postFeedback?.likes ?? 0

    await c.env!.KV_POST_FEEDBACK.put(
      id,
      JSON.stringify({ likes: postLikes + 1 })
    );

    return c.html(<RatePostForm postId={id} postLikes={postLikes + 1} status="success" />);
  } catch (err) {
    console.log(err);
    return c.html(<RatePostForm postId={id} postLikes={0} />);
  }
};
