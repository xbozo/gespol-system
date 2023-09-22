import { PlanningType } from "../../@types/PlanningType";
import * as C from "./styles";

export function PlanningItem({
    title,
    location,
    responsible,
    date,
}: PlanningType) {
    return (
        <C.Container>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <h3>{date}</h3>
            <h3>{responsible}</h3>
        </C.Container>
    );
}
