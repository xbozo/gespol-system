import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    color: #000;
`;

export const Content = styled.section`
    width: 100%;
    padding: 0 6rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;

    .form {
        display: flex;
        flex-direction: column;
        border: 1px solid #eee;
        border-radius: 8px;
        gap: 1.2rem;
        margin-top: 2.4rem;

        input {
            padding: 1rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }

    @media (max-width: 800px) {
        padding: 0 3rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
    gap: 1.6rem;

    .discard,
    button {
        border-radius: 5px;
        padding: 1rem 6rem;
        color: #fff;
        text-align: center;
    }

    .discard {
        border: 1px solid #ff2c2c;
        background-color: transparent;
        color: #ff2c2c;

        &:hover {
            opacity: 0.7;
        }
    }

    button {
        background-color: #007bff;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;

        .discard,
        button {
            padding: 1rem;
        }
    }
`;
