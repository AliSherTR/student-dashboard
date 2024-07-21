import { instructorData } from "../data";
import InstructorAvatar from "./InstructorAvatar";

export default function CourseInstructors() {
    return (
        <div>
            <h3 className=" font-bold text-black mb-3 text-lg tracking-wider">
                Course Instructors
            </h3>

            <div className="flex gap-3 ">
                {instructorData.map((item) => (
                    <InstructorAvatar key={item.id} imgSrc={item.image} />
                ))}
            </div>
        </div>
    );
}
