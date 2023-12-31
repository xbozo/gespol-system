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

    .new-operation-btn {
        text-align: end;

        button {
            border-radius: 5px;
            padding: 0.8rem 4rem;
            background-color: #007bff;
            color: #fff;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    .plannings-list {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 800px) {
        padding: 1rem 3rem;
    }

    @media (max-width: 1024px) {
        .new-operation-btn button {
            width: 100%;
        }
    }
`;

export const PlanningsTable = styled(Table)`
    width: 100%;
    margin-top: 2.4rem;
    color: rgb(39 39 42);

    th {
        height: 4rem;
        width: 2rem;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
    }

    @media (max-width: 1024px) {
        display: block;

        th,
        tr,
        tbody {
            display: block;
            text-align: left;
            width: 100%;
        }

        tr {
            margin-top: 0;
        }

        thead {
            display: none;
        }

        thead,
        tbody {
            width: 100%;
        }
    }
`;
