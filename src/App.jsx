import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import DashboardLayout from "./components/DashboardLayout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    {" "}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
