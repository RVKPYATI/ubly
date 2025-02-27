import { FC } from "react";
import { NavLink, useLocation } from "react-router";
import {
  iconCatalog,
  iconConfig,
  iconPeople,
  iconShape,
  iconsPayments,
} from "../../utils/svg";
interface NavProps {
  title: string;
  path: string;
}

export const NavItem: FC<NavProps> = ({ title, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavLink to={path}>
      <div
        className={`relative group flex items-center gap-3 text-gray-300 font-bold hover:text-mint ${
          isActive ? "text-mint" : ""
        }`}
      >
        {title === "Каталог" && (
          <div
            className={`group-hover:fill-mint ${
              isActive ? "fill-mint" : "fill-gray-300"
            }`}
          >
            {iconCatalog}
          </div>
        )}
        {title === "Мои прилы" && (
          <div
            className={`group-hover:fill-mint ${
              isActive ? "fill-mint" : "fill-gray-300"
            }`}
          >
            {iconShape}
          </div>
        )}
        {title === "Мои креаторы" && (
          <div
            className={`group-hover:fill-mint ${
              isActive ? "fill-mint" : "fill-gray-300"
            }`}
          >
            {iconPeople}
          </div>
        )}
        {title === "Выплаты" && (
          <div
            className={` group-hover:fill-mint ${
              isActive ? "fill-mint" : "fill-gray-300"
            }`}
          >
            {iconsPayments}
          </div>
        )}
        {title === "Настройки" && (
          <div
            className={`group-hover:fill-mint ${
              isActive ? "fill-mint" : "fill-gray-300"
            }`}
          >
            {iconConfig}
          </div>
        )}
        <div>{title}</div>
        {title === "Выплаты" && (
          <div className="absolute right-0 w-[18px] h-[18px] bg-[#FF3B30] rounded-full text-white text-[12px] font-bold flex justify-center items-center">
            2
          </div>
        )}
      </div>
    </NavLink>
  );
};
