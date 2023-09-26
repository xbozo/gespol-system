import { PlanningType } from "../../@types/PlanningType";

import { dateFormatter } from "../../utils/dateFormatter";

import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface Props extends PlanningType {
    totalLength: number;
}

export function PlanningItem({
    title,
    location,
    responsible,
    date,
    id,
    totalLength,
}: Props) {
    const formattedDate = dateFormatter(date);

    const navigate = useNavigate();

    return (
        <>
            <C.TRow>
                <th scope="row">{totalLength}</th>
                <td>{title}</td>
                <td>{location}</td>
                <td>{formattedDate}</td>
                <td>{responsible?.toUpperCase()}</td>
                <td className="actions-td">
                    <C.EditActions>
                        <button
                            id="visualizeButton"
                            onClick={() => navigate(`/plannings/${id}`)}
                        >
                            <div className="actionsimg-container">
                                <AiOutlineEye />
                            </div>
                        </button>
                        <button
                            onClick={() => navigate(`/plannings/${id}`)}
                            id="editButton"
                        >
                            <div className="actionsimg-container">
                                <BsPencil />
                            </div>
                        </button>
                        <button
                            onClick={() => navigate(`/plannings/${id}`)}
                            id="deleteButton"
                        >
                            <div className="actionsimg-container">
                                <FiTrash2 />
                            </div>
                        </button>
                    </C.EditActions>
                </td>
            </C.TRow>
        </>
    );
}
