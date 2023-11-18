import type { Context, Env } from "hono";

import Home from "../pages/Home";

export const home = (c: Context<Env, "/", {}>) => {
  return c.render(<Home />);
};
