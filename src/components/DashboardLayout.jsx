import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
    return (
        <div className=" grid  grid-cols-16 gap-0 min-h-screen grid-rows-12 p-6 md:p-2 lg:p-0 overflow-hidden bg-[#fbfbf9]">
            <header className="col-start-3 col-span-full row-start-1 row-end-2">
                <Header />
            </header>
            <aside className="col-start-1 md:block md:col-end-3 hidden col-end-3 row-span-full rounded-[30px] overflow-hidden">
                <Sidebar />
            </aside>
            <main className=" row-start-2 col-start-3 row-span-full col-span-full overflow-y-auto px-3 py-4">
                <Outlet />
            </main>
        </div>
    );
}
