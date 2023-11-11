import type { FC } from "hono/jsx";

export const NavItem: FC<{ href: string }> = ({ children, href }) => {
  return (
    <li>
      <a class="text-gray-400 text-2xl hover:text-white transition" href={href}>
        {children}
      </a>
    </li>
  );
};
