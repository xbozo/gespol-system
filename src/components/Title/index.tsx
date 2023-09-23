import * as C from "./styles";

type Props = {
    title: string;
    dashed?: boolean;
};

export function Title({ title, dashed }: Props) {
    return (
        <C.Container>
            <h1 className={dashed ? "borderB" : ""}>{title}</h1>
        </C.Container>
    );
}
