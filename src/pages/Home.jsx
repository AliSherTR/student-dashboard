import DashboardHero from "../components/DashboardHero";
import EnrolledCourse from "../components/EnrolledCourse";
import StudentFinance from "../components/StudentFinance";
import CourseInstructors from "../components/CourseInstructors";
import DailyNews from "../components/DailyNews";

export default function Home() {
    return (
        <>
            <DashboardHero />

            <div className="grid grid-cols-12 grid-rows-4 md:grid-rows-2 items-start gap-x-4 gap-y-0">
                <div className="col-start-1 lg:col-end-10 col-span-full row-start-1 row-end-3 md:row-auto">
                    <StudentFinance />
                </div>
                <div className="col-start-1 lg:col-end-10 col-span-full row-start-3 md:row-auto row-end-5 mt-3">
                    <EnrolledCourse />
                </div>
                <div className="lg:col-start-10 col-start-1 col-span-full lg:col-end-13  md:mt-0 flex flex-col gap-3 row-start-4 row-end-6 md:row-start-1  row-span-full">
                    <CourseInstructors />
                    <DailyNews />
                </div>
            </div>
        </>
    );
}
