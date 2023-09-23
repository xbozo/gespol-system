import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { api } from "../../libs/axios";
import { PlanningsReducer } from "../../reducers/PlanningsReducer";

import { PlanningType } from "../../@types/PlanningType";

import { Header } from "../../components/Header";
import { PlanningItem } from "../../components/PlanningItem";
import { Title } from "../../components/Title";

import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import * as C from "./styles";

export function Planejamento() {
    const [plannings, dispatch] = useReducer(PlanningsReducer, []);

    const [titleInput, setTitleInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

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

        setTitleInput("");
        setLocationInput("");
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
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
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
                <C.PlanningsTable striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome da Operação</th>
                            <th scope="col">Local do Planejamento</th>
                            <th scope="col">Data</th>
                            <th scope="col">Responsável</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plannings.map((item, index) => (
                            <PlanningItem
                                key={item.id}
                                title={item.title}
                                location={item.location}
                                responsible={item.responsible}
                                date={item.date}
                                id={item.id}
                                totalLength={index + 1}
                                onDelete={handleDeletePlanning}
                                dispatch={dispatch}
                            />
                        ))}
                    </tbody>
                </C.PlanningsTable>
            </C.Content>
        </C.Container>
    );
}
