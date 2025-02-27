import { FC } from "react";
import { iconLogout } from "../utils/svg";
import { Link } from "react-router";

export const Profile: FC = () => {
  return (
    <div className="p-[18px] flex items-center gap-2 border-t-[1px] border-t-[#393C49]">
      {/* icon */}
      <div className="">
        <img
          src="/public/profile.png"
          className="w-[30px] h-[30px] rounded-full object-cover border-[1px] border-[#75797C]"
        />
      </div>
      {/* info */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[14px] text-white">Marci Fumons</div>
          <div className="text-[11px] text-gray-300 font-bold">
            MarciFumons@gmail.com
          </div>
        </div>
        <div>
          <Link to="/logout">
            <div className="fill-gray-300 hover:fill-mint">{iconLogout}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
