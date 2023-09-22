import styled from "styled-components";

export const Header = styled.header`
    width: 32rem;
    height: 100vh;
    padding-top: 3rem;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    .logo {
        width: 20rem;
        margin-bottom: 2.4rem;
    }

    a {
        max-width: 20rem;
        width: 100%;
        padding: 1.2rem 0.8rem;
        border-radius: 8px;
        font-size: 18px;
        display: flex;
        gap: 0.8rem;
        align-items: center;
        color: #fff;
        transition: all ease-in-out 0.15s;

        &:hover {
            opacity: 0.7;
        }

        svg {
            height: 2rem;
            width: 2rem;
        }
    }

    .leave {
        max-width: 20rem;
        width: 100%;
        display: flex;
        padding: 1.2rem 0.8rem;

        button {
            width: 100%;
            background-color: #000;
            text-align: start;
            color: #fff;
            font-size: 18px;

            &:hover {
                opacity: 0.7;
            }
        }

        svg {
            height: 2.4rem;
        }
    }

    #active {
        background-color: #fff;
        font-weight: 700;
        color: #000;
    }
`;
