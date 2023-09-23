import { Link } from "react-router-dom";
import logo from "../../assets/logoGespol.svg";
import * as C from "./styles";

import { BiBriefcase } from "react-icons/bi";
import { BsCalendar, BsGrid } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiPoliceCarLine } from "react-icons/ri";

type Props = {
    activeItem: string;
};

export function Header({ activeItem }: Props) {
    return (
        <C.Header>
            <img src={logo} alt="" className="logo" />
            <Link
                to="/dashboard"
                id={activeItem === "dashboard" ? "active" : ""}
            >
                <BsGrid />
                <span>Dashboard</span>
            </Link>
            <Link
                to="/plannings"
                id={activeItem === "plannings" ? "active" : ""}
            >
                <HiOutlineClipboardDocumentList />
                <span>Planejamento</span>
            </Link>
            <Link to="" id={activeItem === "scalling" ? "active" : ""}>
                <BsCalendar />
                <span>Escalamento</span>
            </Link>
            <Link
                to="/patrolling"
                id={activeItem === "patrolling" ? "active" : ""}
            >
                <RiPoliceCarLine />
                <span>Patrulhamento</span>
            </Link>
            <Link to="" id={activeItem === "management" ? "active" : ""}>
                <BiBriefcase />
                <span>Gestão</span>
            </Link>
            <Link to="/" className="leave">
                <GoSignOut />
                <button>Sair</button>
            </Link>
        </C.Header>
    );
}
