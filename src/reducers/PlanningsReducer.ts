import { v4 as uuidv4 } from "uuid";
import { PlanningType } from "./../@types/PlanningType";

type SetAction = {
    type: "setPlannings";
    payload: PlanningType[];
};

type AddAction = {
    type: "addPlanning";
    payload: PlanningType;
};

type EditAction = {
    type: "editPlanning";
    payload: {
        newTitle: string;
        newDescription: string;
        newLocation: string;
        newDate: string;
        newResponsible: string;
        id: string;
    };
};

type RemoveAction = {
    type: "removePlanning";
    payload: {
        id: string;
    };
};

export type PlanningActions = SetAction | AddAction | EditAction | RemoveAction;

export function PlanningsReducer(
    plannings: PlanningType[],
    action: PlanningActions
) {
    switch (action.type) {
        case "setPlannings":
            return action.payload;

        case "addPlanning":
            return [
                ...plannings,
                {
                    title: action.payload.title,
                    description: action.payload.description,
                    location: action.payload.location,
                    date: action.payload.date,
                    responsible: action.payload.responsible,
                    id: uuidv4(),
                },
            ];

        case "removePlanning":
            return plannings.filter(
                (planning) => planning.id !== action.payload.id
            );

        case "editPlanning":
            return plannings.map((planning) => {
                if (planning.id === action.payload.id) {
                    planning.title = action.payload.newTitle;
                    planning.description = action.payload.newDescription;
                    planning.location = action.payload.newLocation;
                    planning.date = action.payload.newDate;
                    planning.responsible = action.payload.newResponsible;
                }
                return planning;
            });
        default:
            return plannings;
    }
}
