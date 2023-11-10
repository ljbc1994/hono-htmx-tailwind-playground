import { Context, Env } from "hono";
import Form from "../components/LoginForm";
import { LoginFormComplete } from "../components/LoginForm/LoginFormComplete";

export const login = async (c: Context<Env, "/", {}>) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 2500)
  })

  const data = await c.req.formData();

  if (data.get("password") !== "hello") {
    return c.html(
      <Form
        errorMessage="Invalid credentials, try again"
        formData={{
          username: data.get("username")?.toString(),
          password: data.get("password")?.toString(),
        }}
      />
    );
  }

  return c.html(
    <LoginFormComplete username={data.get("username")!.toString()} />
  );
};
