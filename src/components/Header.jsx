import { HiBars3BottomLeft } from "react-icons/hi2";
import DashboardAvatar from "./DashboardAvatar";
import NotificationIcon from "./NotificationIcon";

export default function Header({ sideBarHandler }) {
    return (
        <nav className=" h-full shadow-lg rounded-xl flex items-center px-4">
            <div className=" lg:flex-1 flex gap-1 items-center">
                <button
                    onClick={sideBarHandler}
                    className=" xl:hidden block text-lg"
                >
                    <HiBars3BottomLeft size={30} />
                </button>
                <div className=" relative lg:w-1/3 w-full">
                    <input
                        type="text"
                        placeholder=""
                        className=" rounded-2xl border py-1 px-3 w-full bg-white shadow-lg"
                    />

                    <span className=" absolute  right-4 top-1 text-[#ddd] font-semibold text-sm">
                        Search
                    </span>
                </div>
            </div>
            <div className=" flex items-center justify-end flex-1">
                <DashboardAvatar />

                <NotificationIcon />
            </div>
        </nav>
    );
}
