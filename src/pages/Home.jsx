import DashboardHero from "../components/DashboardHero";
import EnrolledCourse from "../components/EnrolledCourse";
import StudentFinance from "../components/StudentFinance";
import CourseInstructors from "../components/CourseInstructors";
import DailyNews from "../components/DailyNews";

export default function Home() {
    return (
        <>
            <DashboardHero />

            <div className="grid grid-cols-12 auto-rows-[minmax(0,_275px)] items-start gap-x-4">
                <div className="col-start-1 col-end-10">
                    <StudentFinance />
                </div>
                <div className="col-start-1 col-end-10 row-start-2 row-end-3 mt-3">
                    <EnrolledCourse />
                </div>
                <div className="col-start-10 col-end-13 flex flex-col gap-3">
                    <CourseInstructors />
                    <DailyNews />
                </div>
            </div>
        </>
    );
}
