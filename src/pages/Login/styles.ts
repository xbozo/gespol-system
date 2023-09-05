import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	color: #fff;
	display: flex;
`;

export const ImgContainer = styled.div`
	flex: 1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 800px) {
		img {
			display: none;
		}
	}
`;

export const LoginContainer = styled.main`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;

	@media (max-width: 800px) {
		flex: none;
		width: 100%;
	}
`;

export const LoginArea = styled.div`
	.gespal-logo {
		text-align: center;
		margin-bottom: 3rem;

		svg {
			height: 6rem;
			width: 6rem;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		input {
			padding: 0.8rem;
			width: 30rem;
			border-radius: 8px;
			background-color: white;

			&::placeholder {
				color: #888;
			}
		}

		button {
			padding: 0.8rem;
			border-radius: 8px;
			transition: all ease 0.2s;
			margin-bottom: 1.6rem;
			margin-top: 0.8rem;

			a {
				color: #000;
			}

			&:hover {
				filter: brightness(0.7);
			}
		}
	}
`;
