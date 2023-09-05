import * as C from "./styles";

type Props = {
	title: string;
};

export function Title({ title }: Props) {
	return (
		<C.Container>
			<h1>{title}</h1>
		</C.Container>
	);
}
