import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PlanningType } from "../../@types/PlanningType";

import { Header } from "../../components/Header";
import { PlanningItem } from "../../components/PlanningItem";
import { Title } from "../../components/Title";
import { api } from "../../libs/axios";
import { PlanningsReducer } from "../../reducers/PlanningsReducer";
import * as C from "./styles";

export function Planning() {
    const [plannings, dispatch] = useReducer(PlanningsReducer, []);

    const [titleInput, setTitleInput] = useState<string>("");
    const [locationNameInput, setLocationNameInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState("");

    useEffect(() => {
        api.get<PlanningType[]>("/plannings").then((response) => {
            dispatch({
                type: "setPlannings",
                payload: response.data,
            });
        });
    }, []);

    function handleAddPlanning() {
        if (
            titleInput.trim() === "" ||
            locationNameInput.trim() === "" ||
            responsibleInput.trim() === "" ||
            dateInput.trim() === ""
        ) {
            alert("Preencha corretamente todos os campos.");
            return;
        }

        const newPlanning: PlanningType = {
            title: titleInput,
            location: locationNameInput,
            date: dateInput,
            responsible: responsibleInput,
            id: uuidv4(),
        };

        api.post("/plannings", newPlanning).then((response) => {
            dispatch({
                type: "addPlanning",
                payload: response.data,
            });
        });

        setTitleInput("");
        setLocationNameInput("");
        setResponsibleInput("");
        setDateInput("");
    }

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
        <C.Container>
            <Header activeItem={"planning"} />

            <C.Content>
                <Title title={"Planejamento"} />
                <div className="form">
                    <input
                        type="text"
                        placeholder="Título da Operação"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        className="crud-input"
                    />
                    <input
                        type="text"
                        placeholder="Local do Planejamento"
                        value={locationNameInput}
                        onChange={(e) => setLocationNameInput(e.target.value)}
                        className="crud-input"
                    />
                    <input
                        type="text"
                        placeholder="Responsável"
                        value={responsibleInput}
                        onChange={(e) => setResponsibleInput(e.target.value)}
                        className="crud-input"
                    />
                    <input
                        type="date"
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                        className="crud-input"
                    />
                    <button
                        onClick={() => handleAddPlanning()}
                        className="bg-blue-500 rounded py-2 ease-in-out duration-200 hover:bg-blue-600"
                    >
                        Adicionar Operação
                    </button>
                </div>
                <div className="plannings-list">
                    {plannings.map((item, index) => (
                        <PlanningItem
                            key={index}
                            title={item.title}
                            location={item.location}
                            responsible={item.responsible}
                            date={item.date}
                            id={item.id}
                            onDelete={handleDeletePlanning}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </C.Content>
        </C.Container>
    );
}
