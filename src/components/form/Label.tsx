import type { FC } from "hono/jsx";

export const Label: FC<Hono.LabelHTMLAttributes> = (props) => {
  return (
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      {...props}
    >
      {props.children}
    </label>
  );
};
