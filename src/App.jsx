import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Registration from "./pages/Registration";
import Courses from "./pages/Courses";
import DropSemester from "./pages/DropSemester";
import Result from "./pages/Result";
import Notice from "./pages/Notice";
import Schedule from "./pages/Schedule";
import DashboardLayout from "./components/DashboardLayout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/drop-semester" element={<DropSemester />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
