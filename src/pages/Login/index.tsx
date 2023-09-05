import { Link } from "react-router-dom";
import Splash from "../../assets/image_3splash.png";
import * as C from "./styles";

import { BsFillCarFrontFill } from "react-icons/bs";

export function Login() {
	return (
		<C.Container>
			<C.ImgContainer>
				<img src={Splash} alt="" className="splash" />
			</C.ImgContainer>

			<C.LoginContainer>
				<C.LoginArea>
					<div className="gespal-logo">
						<BsFillCarFrontFill />
					</div>

					<form>
						<input type="text" placeholder="Usuário" />
						<input type="password" placeholder="Senha" />
						<button>
							<Link to="/dashboard">Entrar</Link>
						</button>
					</form>

					<Link to="/">Esqueceu sua senha?</Link>
				</C.LoginArea>
			</C.LoginContainer>
		</C.Container>
	);
}
