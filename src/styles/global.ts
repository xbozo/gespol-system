import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

        /* @media (max-width: 800px) {
            font-size: 70%;
	    } */
    }

    body {
        background: #fff;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        border: 0;
    }

    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px var(--purple); */
    }

    a {
        text-decoration: none;
        color: pink;
        cursor: pointer;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;
