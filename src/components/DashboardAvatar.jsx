import avatar from "../assets/avatar.avif";
export default function DashboardAvatar() {
    return (
        <div className="flex items-center gap-3">
            <img
                src={avatar}
                alt=""
                className=" w-10 h-10 box-content border-4 border-customPurple mt-2 rounded-full bg-transparent bg-none"
            />

            <div>
                <p className=" font-bold text-black text-sm mt-2">John Doe</p>
                <span className=" text-black text-sm mt-2 text-opacity-50">
                    3rd Year
                </span>
            </div>
        </div>
    );
}
