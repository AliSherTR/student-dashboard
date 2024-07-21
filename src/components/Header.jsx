import DashboardAvatar from "./DashboardAvatar";
import NotificationIcon from "./NotificationIcon";

export default function Header() {
    return (
        <nav className=" h-full flex items-center px-4">
            <div className=" flex-1">
                <div className=" relative w-1/3">
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

            <DashboardAvatar />

            <NotificationIcon />
        </nav>
    );
}
