import { useState } from "react";
import { PlanningType } from "../../@types/PlanningType";

import { PlanningActions } from "../../reducers/PlanningsReducer";
import { dateFormatter } from "../../utils/dateFormatter";

import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

import { api } from "../../libs/axios";
import { PlanningEditModal } from "../PlanningEditModal";
import * as C from "./styles";

interface Props extends PlanningType {
    totalLength: number;
    onDelete: (id: string) => void;
    dispatch: React.Dispatch<PlanningActions>;
}

export function PlanningItem({
    title,
    location,
    responsible,
    date,
    id,
    totalLength,
    dispatch,
}: Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const formattedDate = dateFormatter(date);

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

    return (
        <>
            <C.TRow>
                <th scope="row">{totalLength}</th>
                <td>{title}</td>
                <td>{location}</td>
                <td>{formattedDate}</td>
                <td>{responsible?.toUpperCase()}</td>
                <td className="actions-td">
                    <div className="edit-actions">
                        <button id="visualizeButton">
                            <div className="actionsimg-container">
                                <AiOutlineEye />
                            </div>
                        </button>
                        <button
                            onClick={() => setIsEditModalOpen(true)}
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
                    </div>
                </td>
            </C.TRow>

            <PlanningEditModal
                id={id}
                dispatch={dispatch}
                isEditModalOpen={isEditModalOpen}
                closeEditModal={() => setIsEditModalOpen(false)}
            />
        </>
    );
}
