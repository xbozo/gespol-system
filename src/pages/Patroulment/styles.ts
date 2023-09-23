import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    color: #000;
`;

export const Content = styled.section`
    width: 100%;
    padding: 0 6rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: scroll;

    .form {
        display: flex;
        gap: 10px;

        input {
            padding: 10px;
            border: 1px solid gray;
            border-radius: 5px;
        }

        button {
            border-radius: 5px;
            padding: 0 10px;
            background-color: #008744;
            color: #fff;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .plannings-list {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
