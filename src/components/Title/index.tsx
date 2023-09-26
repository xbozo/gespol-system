import * as C from "./styles";

type Props = {
    suffix?: string;
    title: string;
    dashed?: boolean;
};

export function Title({ suffix, title, dashed }: Props) {
    return (
        <C.Container>
            <div className={dashed ? "borderB" : ""}>
                <h1 className="suffix">{suffix}</h1>
                <h1 className={`${"title"} ${suffix ? "" : "bold"}`}>
                    {title}
                </h1>
            </div>
        </C.Container>
    );
}
