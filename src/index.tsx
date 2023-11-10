import { Hono } from "hono";
import { renderer } from "./renderer";
import { home } from "./routes/home";
import { login } from "./routes/login";

const app = new Hono();

app.get("*", renderer);

app.get("/", home);
app.post("/login", login);

export default app;
