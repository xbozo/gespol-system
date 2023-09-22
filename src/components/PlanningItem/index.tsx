import { useState } from "react";
import { PlanningType } from "../../@types/PlanningType";

import { PlanningActions } from "../../reducers/PlanningsReducer";
import { dateFormatter } from "../../utils/dateFormatter";
import * as C from "./styles";

interface Props extends PlanningType {
    onDelete: (id: string) => void;
    dispatch: React.Dispatch<PlanningActions>;
}

export function PlanningItem({
    title,
    location,
    responsible,
    date,
    id,
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
            alert("Preencha todos os campos.");
        } else {
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

            setIsEditModalOpen(false);
        }
    }

    return (
        <C.Container>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <h3>{responsible}</h3>
            <h3>{formattedDate}</h3>
            <button onClick={handleDeletePlanning}>Apagar</button>
            <br />
            <button onClick={() => setIsEditModalOpen(true)}>Editar</button>

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
        </C.Container>
    );
}
