import { Link } from "react-router-dom";
import oop from "../assets/oop.png";
import dba from "../assets/dba.png";
import Button from "./Button";
export default function EnrolledCourse() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className=" font-bold text-black mb-3 text-lg tracking-wider">
                    Enrolled Courses
                </h3>

                <Link className=" text-purple-700 underline font-bold">
                    See all
                </Link>
            </div>

            <div className=" flex flex-col md:flex-row gap-4">
                <div className=" px-5 py-4  rounded-2xl flex-1 flex items-center justify-between bg-gradientPurple bg-opacity-60 box-content border-4 border-gradientPurple ">
                    <div className="">
                        <h2 className=" font-bold text-gradientPurple">
                            Object Oriented Programming
                        </h2>
                        <Button text="View" />
                    </div>
                    <img src={oop} alt="" className="" />
                </div>

                <div className=" px-5 py-4  rounded-2xl flex-1 flex items-center justify-between bg-gradientPurple bg-opacity-60 ">
                    <div>
                        <h2 className=" font-bold text-gradientPurple">
                            Fundamentals of Database Systems
                        </h2>
                        <Button text="View" />
                    </div>
                    <img src={dba} alt="" />
                </div>
            </div>
        </div>
    );
}
