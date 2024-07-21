import { Link } from "react-router-dom";

export default function DailyNews() {
    return (
        <div className=" mt-4">
            <div className="flex items-center justify-between">
                <h3 className=" font-bold text-black mb-3 text-lg tracking-wider">
                    Daily News
                </h3>

                <Link className=" text-purple-700 underline font-bold">
                    See all
                </Link>
            </div>
            <div className=" py-4 px-3 bg-white rounded-xl shadow-lg">
                <div>
                    <h2 className=" font-bold text-sm">Prelim Payment Due</h2>
                    <p className=" text-black tracking-wide text-opacity-60 text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quaerat, rerum! Nesciunt magnam odit pariatur
                        minus distinctio, ab repellat, dicta corrupti autem nisi
                        incidunt vel atque natus, tenetur alias sunt laudantium?
                    </p>
                    <Link className=" font-bold text-sm block mb-4 text-gradientPurple">
                        See More
                    </Link>
                </div>

                <div>
                    <h2 className=" font-bold text-sm">Prelim Payment Due</h2>
                    <p className=" text-black tracking-wide text-opacity-60 text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quaerat, rerum! Nesciunt magnam odit pariatur
                        minus distinctio, ab repellat, dicta corrupti autem nisi
                        incidunt vel atque natus, tenetur alias sunt laudantium?
                    </p>
                    <Link className=" font-bold text-sm block  text-gradientPurple">
                        See More
                    </Link>
                </div>
            </div>
        </div>
    );
}
