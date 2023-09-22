import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Patrolling } from "./pages/Patrolling";
import { Planning } from "./pages/Planning";

export function RouterList() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/planning" element={<Planning />} />
                <Route path="/patrolling" element={<Patrolling />} />
            </Routes>
        </BrowserRouter>
    );
}
