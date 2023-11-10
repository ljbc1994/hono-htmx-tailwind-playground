import { Hono } from "hono";
import { renderer } from "./renderer";
import { home } from "./routes/home";
import { login } from "./routes/login";
import { post } from "./routes/post";
import { ratePost } from "./routes/rate-post";

const app = new Hono();

app.get("*", renderer);

app.get("/", home);
app.get("/post/:id", post);
app.post("/login", login);
app.post("/rate-post/:id", ratePost);

export default app;
