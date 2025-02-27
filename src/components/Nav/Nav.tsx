import { FC } from "react";

const links = [
  { name: "Каталог", path: "/" },
  { name: "Мои прилы", path: "/apps" },
  { name: "Мои креаторы", path: "/creators" },
  { name: "Выплаты", path: "/payments" },
  { name: "Настройки", path: "/config" },
];

import { NavItem } from "./NavItem";

export const Nav: FC = () => {
  return (
    <ul className="flex flex-col gap-[18px]">
      {links.map((link, i) => {
        return (
          <li key={i}>
            <NavItem title={link.name} path={link.path} />
          </li>
        );
      })}
    </ul>
  );
};
