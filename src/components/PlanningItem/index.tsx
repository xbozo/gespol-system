import { useReducer } from "react";
import { PlanningType } from "../../@types/PlanningType";

import { PlanningsReducer } from "../../reducers/PlanningsReducer";
import { dateFormatter } from "../../utils/dateFormatter";

import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { api } from "../../libs/axios";
import * as C from "./styles";

interface Props extends PlanningType {
    totalLength: number;
    onDelete: (id: string) => void;
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

    const [, dispatch] = useReducer(PlanningsReducer, []);

    const navigate = useNavigate();

    function handleDeletePlanning(id: string) {
        api.delete(`/plannings/${id}`).then(() => {
            dispatch({
                type: "removePlanning",
                payload: {
                    id,
                },
            });
        });
    }

    function handleOperationDetails() {
        navigate(`/plannings/${id}`);
    }

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
                        <button id="visualizeButton">
                            <div className="actionsimg-container">
                                <AiOutlineEye />
                            </div>
                        </button>
                        <button
                            onClick={handleOperationDetails}
                            id="editButton"
                        >
                            <div className="actionsimg-container">
                                <BsPencil />
                            </div>
                        </button>
                        <button
                            onClick={() => handleDeletePlanning(id)}
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
