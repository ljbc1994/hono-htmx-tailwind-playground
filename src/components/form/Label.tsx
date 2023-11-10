import { JSXNode } from "hono/jsx";

export const Label = (props: Hono.LabelHTMLAttributes & { children: JSXNode | string }) => {
  return (
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      {...props}
    >
      {props.children}
    </label>
  );
};
