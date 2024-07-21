import { NavLink } from "react-router-dom";

export default function SideBarLink({ imgSrc, destination, title }) {
    return (
        <NavLink
            to={destination}
            className=" flex items-center gap-2 py-4 mb-1 px-3  text-white opacity-50   text-sm"
        >
            <img src={imgSrc} alt="icon" />
            <span>{title}</span>
        </NavLink>
    );
}
