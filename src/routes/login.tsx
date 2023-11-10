import { Context, Env } from "hono";
import Form from "../components/LoginForm";
import { LoginFormComplete } from "../components/LoginForm/LoginFormComplete";

export const login = async (c: Context<Env, "/", {}>) => {
  const data = await c.req.formData();

  if (data.get("password") !== "hello") {
    return c.render(
      <Form
        errorMessage="Invalid credentials, try again"
        formData={{
          username: data.get("username")?.toString(),
          password: data.get("password")?.toString(),
        }}
      />
    );
  }

  return c.render(
    <LoginFormComplete username={data.get("username")!.toString()} />
  );
};
