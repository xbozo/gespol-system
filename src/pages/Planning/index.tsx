import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import * as C from "./styles";

export function Planning() {
	return (
		<C.Container>
			<Header activeItem={"planning"} />

			<C.Content>
				<Title title={"Planning"} />
				<div>teste</div>
			</C.Content>
		</C.Container>
	);
}
