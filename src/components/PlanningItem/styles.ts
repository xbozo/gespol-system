import styled from "styled-components";

export const TRow = styled.tr`
    width: 100%;
    color: #000;
    margin-top: 3rem;

    td {
        text-align: center;
        vertical-align: middle;
        padding: 0.5rem;
        font-weight: 500;
    }

    .actions-td {
        width: 10%;
    }

    @media (max-width: 1024px) {
        td {
            display: block;
            font-weight: bold;
        }

        .actions-td {
            width: 100%;
        }
    }
`;

export const EditActions = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    button {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 8px;

        &:hover {
            opacity: 0.7;
        }
    }

    .actionsimg-container {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            height: 1.7rem;
            width: 1.7rem;
            font-weight: bold;
        }
    }

    #visualizeButton {
        border: 1px solid #007bff;

        svg {
            color: #007bff;
        }
    }

    #editButton {
        border: 1px solid #f6be2c;

        svg {
            color: #f6be2c;
        }
    }

    #deleteButton {
        border: 1px solid red;

        svg {
            color: red;
        }
    }

    @media (max-width: 1024px) {
        button {
            width: 4rem;
            height: 4rem;
        }
    }
`;
