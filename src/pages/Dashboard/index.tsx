import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import * as C from "./styles";

export function Dashboard() {
	return (
		<C.Container>
			<Header activeItem={"dashboard"} />

			<C.Content>
				<Title title={"Dashboard"} />
				<div>teste</div>
			</C.Content>
		</C.Container>
	);
}
