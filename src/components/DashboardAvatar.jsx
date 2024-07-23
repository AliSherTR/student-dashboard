import avatar from "../assets/avatar.avif";
export default function DashboardAvatar() {
    return (
        <div className=" sm:ml-0 ml-4 flex items-center gap-0 sm:gap-3">
            <img
                src={avatar}
                alt=""
                className=" w-5 h-5 sm:w-10 sm:h-10 box-content border-4 border-customPurple mt-0 sm:mt-0  rounded-full bg-transparent bg-none"
            />

            <div>
                <p className="font-bold text-black text-sm mt-2 sm:block hidden">
                    John Doe
                </p>
                <span className=" text-black text-sm text-opacity-50 sm:block hidden">
                    3rd Year
                </span>
            </div>
        </div>
    );
}
