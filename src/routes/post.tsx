import { Context, Env } from "hono";
import { marked } from 'marked';

import Post from "../pages/Post";

export const post = async (c: Context<Env, "/post/:id", {}>) => {
  const id = c.req.param('id')

  const html = marked.parse(`# Blog Post ${id}\n\nRendered by **marked**.`)

  c.res.headers.set('Cache-Control', 'public, s-maxage=604800');

  return c.render(<Post content={html} />, { title: 'Example' });
};
