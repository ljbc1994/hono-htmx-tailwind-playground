import { Hono } from "hono";

import type { Env } from "./types/Bindings";

import { home } from "./routes/home";
import { login } from "./routes/login";
import { post } from "./routes/post";
import { ratePost } from "./routes/rate-post";
import { posts } from "./routes/posts";

import { PostService } from "./services/PostService";
import { PostMetadataService } from "./services/PostMetadataService";

import { getEnv } from "./utils/getEnv";

import { renderer } from "./renderer";

const app = new Hono<Env>();

app.use('*', async (c, next) => {
    const env = getEnv(c.env)

    c.set('postService', new PostService({ env }))
    c.set('postMetadataService', new PostMetadataService({ env }))

    await next()
})

app.get("*", renderer);

app.get("/", home);
app.get("/posts", posts);
app.get("/post/:id", post);
app.post("/login", login);
app.post("/rate-post/:id", ratePost);

export default app;
