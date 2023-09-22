import Splash from "../../assets/image_3splash.png";
import logo from "../../assets/logoGespol.svg";
import * as C from "./styles";

import { Link } from "react-router-dom";

export function Login() {
	return (
		<C.Container>
			<C.ImgContainer>
				<img src={Splash} alt="" className="splash" />
			</C.ImgContainer>

			<C.LoginContainer>
				<C.LoginArea>
					<div className="gespal-logo">
						<img src={logo} alt="" />
					</div>

					<form>
						<input type="text" placeholder="Usuário" />
						<input type="password" placeholder="Senha" />
						<Link to="/dashboard">
							<button>Entrar</button>
						</Link>
					</form>

					<Link to="/" className="forgot-password">
						Esqueceu sua senha?
					</Link>
				</C.LoginArea>
			</C.LoginContainer>
		</C.Container>
	);
}
