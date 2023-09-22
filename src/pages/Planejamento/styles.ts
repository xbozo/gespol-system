import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    color: #000;
`;

export const Content = styled.section`
    width: 100%;
    margin-left: 6rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: scroll;

    .form {
        display: flex;
        gap: 1rem;

        input {
            padding: 1rem;
            border: 1px solid gray;
            border-radius: 5px;
        }

        button {
            border-radius: 5px;
            padding: 0 1rem;
            background-color: #008744;
            color: #fff;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .plannings-list {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
