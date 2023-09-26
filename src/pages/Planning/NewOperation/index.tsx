import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { api } from "../../../libs/axios";
import { PlanningsReducer } from "../../../reducers/PlanningsReducer";

import { PlanningType } from "../../../@types/PlanningType";

import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as C from "./styles";

export function NewOperation() {
    const [, dispatch] = useReducer(PlanningsReducer, []);

    const [titleInput, setTitleInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const navigate = useNavigate();

    function handleAddPlanning() {
        if (
            titleInput.trim() === "" ||
            descriptionInput.trim() === "" ||
            locationInput.trim() === "" ||
            responsibleInput.trim() === "" ||
            dateInput.trim() === ""
        ) {
            toast.error("Preencha corretamente todos os campos.");
            return;
        }

        const newPlanning: PlanningType = {
            title: titleInput,
            description: descriptionInput,
            location: locationInput,
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

        toast.success("Operação adicionada com sucesso.");

        // setTitleInput("");
        // setLocationInput("");
        // setResponsibleInput("");
        // setDateInput("");

        navigate("/plannings");
    }

    function discartedChangesToast() {
        toast.error("Adição descartada.");

        navigate("/plannings");
    }

    return (
        <C.Container>
            <Header activeItem={"plannings"} />

            <C.Content>
                <Title title={"Novo Planejamento"} dashed={true} />
                <div className="form">
                    <input
                        type="text"
                        placeholder="Título da Operação"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição da Operação"
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Local do Planejamento"
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Responsável"
                        value={responsibleInput}
                        onChange={(e) => setResponsibleInput(e.target.value)}
                    />
                    <input
                        type="date"
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                    />
                </div>

                <C.ButtonsContainer>
                    <button className="discard" onClick={discartedChangesToast}>
                        Descartar
                    </button>
                    <button onClick={handleAddPlanning}>
                        Adicionar Operação
                    </button>
                </C.ButtonsContainer>
            </C.Content>
        </C.Container>
    );
}
