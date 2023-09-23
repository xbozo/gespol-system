import { useState } from "react";
import { PlanningType } from "../../@types/PlanningType";

import { PlanningActions } from "../../reducers/PlanningsReducer";
import { dateFormatter } from "../../utils/dateFormatter";

import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import { api } from "../../libs/axios";
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
    onDelete,
    dispatch,
}: Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [editedTitle, setEditedTitle] = useState("");
    const [editedLocation, setEditedLocation] = useState("");
    const [editedResponsible, setEditedResponsible] = useState("");
    const [editedDate, setEditedDate] = useState("");

    const formattedDate = dateFormatter(date);

    function handleDeletePlanning() {
        onDelete(id);
    }

    function handleSaveEditChanges() {
        if (
            editedTitle.trim() === "" ||
            editedLocation.trim() === "" ||
            editedResponsible.trim() === "" ||
            editedDate.trim() === ""
        ) {
            toast.error("Preencha corretamente todos os campos.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            const editedPlanning: PlanningType = {
                title: editedTitle,
                location: editedLocation,
                date: editedDate,
                responsible: editedResponsible,
                id,
            };

            api.put(`/plannings/${id}`, editedPlanning).then(() => {
                dispatch({
                    type: "editPlanning",
                    payload: {
                        newTitle: editedTitle,
                        newLocation: editedLocation,
                        newDate: editedDate,
                        newResponsible: editedResponsible,
                        id,
                    },
                });
            });

            setIsEditModalOpen(false);
            setEditedTitle("");
            setEditedLocation("");
            setEditedResponsible("");
            setEditedDate("");
        }
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
                            onClick={handleDeletePlanning}
                            id="deleteButton"
                        >
                            <div className="actionsimg-container">
                                <FiTrash2 />
                            </div>
                        </button>
                    </div>
                </td>
            </C.TRow>

            {/* Edit modal and edit operation logic*/}
            {isEditModalOpen && (
                <C.EditModalOverlay>
                    <C.EditModalContainer>
                        <h1>Modificar Operação</h1>
                        <C.EditModalInputContainer>
                            <input
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                                type="text"
                                placeholder="Título da Operação"
                            />
                            <input
                                value={editedLocation}
                                onChange={(e) =>
                                    setEditedLocation(e.target.value)
                                }
                                type="text"
                                placeholder="Local da Operação"
                            />
                            <input
                                value={editedResponsible}
                                onChange={(e) =>
                                    setEditedResponsible(e.target.value)
                                }
                                type="text"
                                placeholder="Responsável"
                            />
                            <input
                                value={editedDate}
                                onChange={(e) => setEditedDate(e.target.value)}
                                type="date"
                                placeholder="Data da Operação"
                            />
                        </C.EditModalInputContainer>

                        <C.EditModalButtonContainer>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                id="closeButton"
                            >
                                Fechar
                            </button>
                            <button
                                onClick={handleSaveEditChanges}
                                id="saveButton"
                            >
                                Salvar Alterações
                            </button>
                        </C.EditModalButtonContainer>
                    </C.EditModalContainer>
                </C.EditModalOverlay>
            )}
        </>
    );
}
