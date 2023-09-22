import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Patrulhamento } from "./pages/Patrulhamento";
import { Planejamento } from "./pages/Planejamento";

export function RouterList() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/planning" element={<Planejamento />} />
                <Route path="/patrolling" element={<Patrulhamento />} />
            </Routes>
        </BrowserRouter>
    );
}
