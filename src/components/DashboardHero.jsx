import collegeStudent from "../assets/collegeStudent.png";
import Scholarcap from "../assets/Scholarcap.png";
import Backpack from "../assets/Backpack.png";

export default function DashboardHero() {
    return (
        <section className=" my-4 ">
            <div className=" py-5 px-10 bg-gradientPurple rounded-xl flex items-center justify-between">
                <div className=" flex-1">
                    <p className=" text-white text-sm mb-10 mt-10">
                        September 23, 2023
                    </p>

                    <h1 className=" text-5xl text-white font-bold ">
                        Welcome Back, John!
                    </h1>
                    <p className=" my-4 text-white text-opacity-70 ">
                        Always stay upto date with your student portal
                    </p>
                </div>

                <div className=" relative flex-1">
                    <img
                        src={collegeStudent}
                        alt=""
                        className=" w-[40%] block m-auto relative z-30"
                    />
                    <img
                        src={Scholarcap}
                        alt=""
                        className=" w-1/2 block m-auto absolute inset-0 right-[50%] top-20 z-10"
                    />

                    <img
                        src={Backpack}
                        alt=""
                        className=" w-[22%] block m-auto absolute inset-0 left-[28%] top-24 z-10"
                    />
                </div>
            </div>
        </section>
    );
}
