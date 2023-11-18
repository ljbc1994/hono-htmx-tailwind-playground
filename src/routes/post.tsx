import { Context } from "hono";

import type { Env } from "../types/Bindings";
import type { KvPostFeedback } from "../types/KvPostFeedback";

import Post from "../pages/Post";

import { parseMarkdown } from "../utils/parseMarkdown";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param("id");

  try {
    const postFeedback = await c.env!.KV_POST_FEEDBACK.get<KvPostFeedback>(
      id,
      "json"
    );
    const postLikes = postFeedback?.likes ?? 0;

    const post = await c.get("postService").getPostById(id);

    if (post == null) {
      return c.render(<Post postId={id} postLikes={0} content="Nope" />, {
        title: "No post found",
      });
    }

    const metadataDetails = await c
      .get("postMetadataService")
      .getPostMetadataDetailsById(id);

    const { html, metadata } = await parseMarkdown(post);

    return c.render(
      <Post
        postId={id}
        postLikes={postLikes}
        metadata={metadata}
        relatedPosts={metadataDetails?.relatedPosts}
        content={html}
      />,
      {
        title: metadata?.title,
      }
    );
  } catch (err) {
    console.log(err);
    return c.render(<Post postId={id} postLikes={0} content="Error" />, {
      title: "Something went wrong",
    });
  }
};
