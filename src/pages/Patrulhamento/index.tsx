import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import * as C from "./styles";

export function Patrulhamento() {
    return (
        <C.Container>
            <Header activeItem={"patrolling"} />

            <C.Content>
                <Title title={"Patrulhamento"} />
            </C.Content>
        </C.Container>
    );
}
