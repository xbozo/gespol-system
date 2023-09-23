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
    const [plannings, dispatch] = useReducer(PlanningsReducer, []);

    const [titleInput, setTitleInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const navigate = useNavigate();

    function handleAddPlanning() {
        if (
            titleInput.trim() === "" ||
            locationInput.trim() === "" ||
            responsibleInput.trim() === "" ||
            dateInput.trim() === ""
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
            return;
        }

        const newPlanning: PlanningType = {
            title: titleInput,
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

        toast.success("Operação adicionada com sucesso.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTitleInput("");
        setLocationInput("");
        setResponsibleInput("");
        setDateInput("");

        navigate("/plannings");
    }

    function discartedChangesToast() {
        toast.error("Mudanças descartadas.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

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
                        Descartar alterações
                    </button>
                    <button onClick={handleAddPlanning}>
                        Adicionar Operação
                    </button>
                </C.ButtonsContainer>
            </C.Content>
        </C.Container>
    );
}
