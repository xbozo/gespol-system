import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../libs/axios";

import { toast } from "react-toastify";

import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";

import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineRight } from "react-icons/ai";
import { PlanningType } from "../../../@types/PlanningType";
import { PlanningsReducer } from "../../../reducers/PlanningsReducer";
import * as C from "./styles";

export function PlanningDetails() {
    const [isEditOptionsEnabled, setIsEditOptionsEnabled] = useState(false);

    const [titleInput, setTitleInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");
    const [responsibleInput, setResponsibleInput] = useState<string>("");
    const [dateInput, setDateInput] = useState<string>("");

    const { id } = useParams()!;
    const navigate = useNavigate();

    const [, dispatch] = useReducer(PlanningsReducer, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/plannings/${id}`);
                const planningData = response.data;

                setTitleInput(planningData.title);
                setLocationInput(planningData.location);
                setResponsibleInput(planningData.responsible);
                setDateInput(planningData.date);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [id]);

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

    function handleToggleEditPanel() {
        // SE o usuário tiver permissão...
        setIsEditOptionsEnabled(!isEditOptionsEnabled);
        // SE o usuário NÃO tiver permissão...
        // toast.error("Sem autorização para realizar essa ação.", {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // });
    }

    function handleSaveEditChanges() {
        if (
            titleInput.trim() === "" ||
            locationInput.trim() === "" ||
            responsibleInput.trim() === "" ||
            dateInput.trim() === "" ||
            id === undefined
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
                title: titleInput,
                location: locationInput,
                date: dateInput,
                responsible: responsibleInput,
                id,
            };

            api.put(`/plannings/${id}`, editedPlanning).then(() => {
                dispatch({
                    type: "editPlanning",
                    payload: {
                        newTitle: titleInput,
                        newLocation: locationInput,
                        newDate: dateInput,
                        newResponsible: responsibleInput,
                        id,
                    },
                });
            });

            toast.success("Modificações realizadas com sucesso.", {
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
    }

    return (
        <C.Container>
            <Header activeItem={"plannings"} />

            <C.Content>
                <Title suffix="Operação:" title={titleInput} dashed={true} />
                <C.ButtonsContainer>
                    <div className="status">
                        <AiOutlineRight height={20} width={20} />
                        <h3>
                            Status -
                            {isEditOptionsEnabled
                                ? " Editando Operação"
                                : " Visualizando Operação"}
                        </h3>
                    </div>
                    <button id="edit" onClick={handleToggleEditPanel}>
                        Editar Operação
                    </button>
                </C.ButtonsContainer>

                <div className="form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Título da Operação"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        disabled={!isEditOptionsEnabled}
                    />
                    <input
                        type="text"
                        placeholder="Local do Planejamento"
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        disabled={!isEditOptionsEnabled}
                    />
                    <input
                        type="text"
                        placeholder="Responsável"
                        value={responsibleInput}
                        onChange={(e) => setResponsibleInput(e.target.value)}
                        disabled={!isEditOptionsEnabled}
                    />
                    <input
                        type="date"
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                        disabled={!isEditOptionsEnabled}
                    />
                </div>

                <C.ButtonsContainer>
                    {!isEditOptionsEnabled && (
                        <>
                            <button
                                id="return"
                                onClick={() => navigate("/plannings")}
                            >
                                Voltar
                            </button>
                        </>
                    )}
                    {isEditOptionsEnabled && (
                        <>
                            <button
                                id="discard"
                                onClick={discartedChangesToast}
                            >
                                Descartar alterações
                            </button>
                            <button id="save" onClick={handleSaveEditChanges}>
                                Salvar Alterações
                            </button>
                        </>
                    )}
                </C.ButtonsContainer>
            </C.Content>
        </C.Container>
    );
}
