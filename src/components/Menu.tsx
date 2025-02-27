import { FC } from "react";
import { Nav } from "./Nav/Nav";
import { Profile } from "./Profile";
import { Link } from "react-router";

export const Menu: FC = () => {
  return (
    <div className="min-w-[250px] bg-dark-light h-screen flex flex-col justify-between border-r-[1px] border-r-[#393C49]">
      {/* logo */}
      <div className="text-[20px] text-white font-bold uppercase py-[29px] px-[21px] border-b-[1px] border-b-[#393C49]">
        <Link to="/">$ubly</Link>
      </div>
      {/* nav */}
      <nav className="pt-[29px] pl-[26px] pr-[31px]">
        <Nav />
      </nav>
      {/* user */}
      <div className="mt-auto">
        <Profile />
      </div>
    </div>
  );
};
