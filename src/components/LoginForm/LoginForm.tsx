import { Input } from "../form/Input";
import { Label } from "../form/Label";

interface FormData {
  username?: string | undefined;
  password?: string | undefined;
}

interface FormProps {
  formData: FormData;
  errorMessage?: string;
}

export const Form = ({ formData, errorMessage }: FormProps) => {
  return (
    <form
      class="space-y-4 md:space-y-6 w-full"
      hx-post="/login"
      hx-trigger="submit"
      hx-target="this"
      method="POST"
      id="loginForm"
      enctype="multipart/form-data"
    >
      <div class="mb-5">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
      </div>
      {errorMessage ? (
        <div class="px-3 py-2 bg-red-700 rounded-md text-center animate-bounce">
            <p class="text-white text-sm">{errorMessage}</p>
        </div>
      ) : null}
      <fieldset>
        <Label for="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData?.username}
          placeholder="Enter your username"
          required
        />
      </fieldset>
      <fieldset>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData?.password}
          placeholder="Enter your password"
          required
        />
      </fieldset>
      <button
        hx-trigger="submit"
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
    </form>
  );
};

export default Form;
