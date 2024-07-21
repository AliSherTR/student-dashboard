import Logo from "./Logo";
import SideBarLink from "./SideBarLink";
import logout from "../assets/logout.svg";

import { SideBarLinks } from "../data";
import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className=" flex flex-col items-center justify-center gap-3 h-full md:p-3 p-0 lg:p-0 bg-gradient-to-b from-gradientLight from-7%  via-gradientPurple via-20% to-gradientPurple to-100% ">
            <div className=" my-5">
                <Logo />
            </div>
            <ul className=" flex-1">
                {SideBarLinks.map((link) => (
                    <SideBarLink
                        key={link.id}
                        destination={link.destination}
                        imgSrc={link.img}
                        title={link.title}
                    />
                ))}
            </ul>
            <div className="">
                <Link className="flex items-center gap-2 py-4 mb-1 px-3  text-white opacity-50 me-9  text-sm">
                    <img src={logout} alt="" />
                    Logout
                </Link>
            </div>
        </div>
    );
}
