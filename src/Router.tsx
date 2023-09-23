import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Patroulment } from "./pages/Patroulment";
import { NewOperation } from "./pages/Planning/NewOperation";
import { Plannings } from "./pages/Planning/Plannings";

export function RouterList() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/plannings" element={<Plannings />} />
                <Route
                    path="/plannings/newoperation"
                    element={<NewOperation />}
                />
                <Route path="/patrolling" element={<Patroulment />} />
            </Routes>
        </BrowserRouter>
    );
}
