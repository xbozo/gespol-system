import { useState } from "react";

import { PlanningType } from "../../@types/PlanningType";
import { Header } from "../../components/Header";
import { PlanningItem } from "../../components/PlanningItem";
import { Title } from "../../components/Title";
import * as C from "./styles";

export function Patrolling() {
    const [titleInput, setTitleInput] = useState<string>("");
    const [locationNameInput, setLocationNameInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState("");

    const [plannings, setPlannings] = useState<PlanningType[]>([]);

    function handleAddPlanning() {
        if (
            titleInput.trim() === "" ||
            locationNameInput.trim() === "" ||
            responsibleInput.trim() === ""
        ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const newPlanning: PlanningType = {
            title: titleInput,
            location: locationNameInput,
            date: dateInput,
            responsible: responsibleInput,
        };

        setPlannings([...plannings, newPlanning]);

        setTitleInput("");
        setLocationNameInput("");
        setResponsibleInput("");
    }

    return (
        <C.Container>
            <Header activeItem={"patrolling"} />

            <C.Content>
                <Title title={"Patrulhamento"} />
                <div className="form">
                    <input
                        type="text"
                        placeholder="Título do Post"
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
                        placeholder="Data da Operação"
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                        className="crud-input"
                    />
                    <button
                        onClick={() => handleAddPlanning()}
                        className="bg-blue-500 rounded py-2 ease-in-out duration-200 hover:bg-blue-600"
                    >
                        Adicionar Post
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
                        />
                    ))}
                </div>
            </C.Content>
        </C.Container>
    );
}
