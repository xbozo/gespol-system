import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12rem;
    color: #000;
    margin-top: 3rem;

    h1 {
        font-weight: bold;
        font-size: 40px;
    }
`;

export const EditModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EditModalContainer = styled.div`
    background-color: transparent;
    max-width: 70rem;
    max-height: 100%;
    width: 100%;
    height: 100%;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;

    @media screen and (min-width: 640px) {
        padding: 4rem;
    }

    h1 {
        font-size: 3.6rem;
        color: #fff;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;

export const EditModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        padding: 1rem;
        max-height: 350px;
        height: 100%;
        width: 100%;
        color: #000;
        resize: none;
        border-radius: 8px;
        border: none;
        outline: none;
    }
`;

export const EditModalButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 640px) {
        flex-direction: row;
    }

    button {
        padding: 0.5rem 1rem;
        flex: 1;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #saveButton {
        background-color: #469e3a;

        &:hover {
            background-color: #3f8f33;
        }
    }

    #closeButton {
        background-color: #ab3232;

        &:hover {
            background-color: #962f2f;
        }
    }
`;
