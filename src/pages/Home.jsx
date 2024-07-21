import DashboardHero from "../components/DashboardHero";
import EnrolledCourse from "../components/EnrolledCourse";
import StudentFinance from "../components/StudentFinance";
import CourseInstructors from "../components/CourseInstructors";

export default function Home() {
    return (
        <>
            <DashboardHero />

            <div className=" grid grid-cols-2 grid-rows-2 gap-x-4">
                <div>
                    <StudentFinance />
                </div>
                <div className=" col-start-1 col-end-2 row-start-2 row-end-3 mt-3">
                    <EnrolledCourse />
                </div>
                <div className=" flex flex-col gap-3 ">
                    <CourseInstructors />
                </div>
            </div>
        </>
    );
}
