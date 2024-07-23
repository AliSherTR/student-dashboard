import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function DashboardLayout() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    function handleSideBar() {
        setSideBarOpen(!sideBarOpen);
    }
    return (
        <div className=" grid grid-cols-16 gap-0 h-screen grid-rows-12  overflow-y-hidden bg-[#fbfbf9]">
            <header className=" col-start-1 xl:col-start-3 lg:col-start-1 col-span-full row-start-1 row-end-2">
                <Header sideBarHandler={handleSideBar} />
            </header>
            <div
                className={`absolute h-full w-[100vw] bg-black bg-opacity-35 inset-0 cursor-pointer ${
                    sideBarOpen ? " block " : "hidden "
                } `}
                onClick={handleSideBar}
            ></div>
            <aside
                className={`col-start-1 xl:block md:col-end-3  col-end-3 row-span-full rounded-[30px] overflow-y-auto ${
                    sideBarOpen
                        ? " block sm:col-end-9 col-end-9 md:col-end-13 lg:col-end-4 h-screen relative z-50  "
                        : "hidden "
                }`}
            >
                <Sidebar handleSideBar={handleSideBar} />
            </aside>
            <main className=" row-start-2 xl:col-start-3 lg:col-start-1 col-start-1 row-span-full col-span-full overflow-y-scroll px-3 py-4">
                <Outlet />
            </main>
        </div>
    );
}
