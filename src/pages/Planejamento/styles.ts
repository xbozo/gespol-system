import Table from "react-bootstrap/Table";
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

export const PlanningsTable = styled(Table)`
    max-width: 144rem;
    width: 100%;
    margin-top: 4rem;
    color: rgb(39 39 42);

    th {
        height: 4rem;
        width: 2rem;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
    }
`;
