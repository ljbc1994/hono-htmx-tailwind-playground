export const NavItem = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <li>
      <a class="text-gray-400 text-2xl hover:text-white transition" href={href}>
        {children}
      </a>
    </li>
  );
};
