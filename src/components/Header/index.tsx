import { Link } from "react-router-dom";
import logo from "../../assets/logoGespol.svg";
import * as C from "./styles";

import { BsFillGridFill } from "react-icons/bs";

type Props = {
    activeItem: string;
};

export function Header({ activeItem }: Props) {
    return (
        <C.Header>
            <img src={logo} alt="" />
            <Link
                to="/dashboard"
                id={activeItem === "dashboard" ? "active" : ""}
            >
                <BsFillGridFill />
                <span>Dashboard</span>
            </Link>
            <Link to="/planning" id={activeItem === "planning" ? "active" : ""}>
                <span>Planejamento</span>
            </Link>
            <Link to="" id={activeItem === "scalling" ? "active" : ""}>
                <span>Escalamento</span>
            </Link>
            <Link
                to="/patrolling"
                id={activeItem === "patrolling" ? "active" : ""}
            >
                <span>Patrulhamento</span>
            </Link>
            <Link to="" id={activeItem === "management" ? "active" : ""}>
                <span>Gestão</span>
            </Link>
            <Link to="/" className="leave">
                <button>Sair</button>
            </Link>
        </C.Header>
    );
}
