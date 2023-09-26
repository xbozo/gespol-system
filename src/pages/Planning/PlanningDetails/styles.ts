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

        input,
        textarea {
            padding: 1rem;
            border: 1px solid gray;
            border-radius: 5px;

            &:disabled {
                cursor: not-allowed;
            }
        }

        textarea {
            resize: none;
            height: 12rem;
        }
    }

    .status {
        display: flex;
        gap: 0.8rem;
        align-items: center;
        border-bottom: 1px solid gray;
        color: #e3963e;
        padding-bottom: 0.5rem;

        h3 {
            margin-bottom: 0;
        }
    }

    @media (max-width: 800px) {
        padding: 0 3rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 3.2rem;
    gap: 1.6rem;

    button {
        border-radius: 5px;
        padding: 1rem 6rem;
        color: #fff;
        text-align: center;
        background-color: #007bff;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .discard-btn {
        border: 1px solid #ff2c2c;
        background-color: transparent;
        color: #ff2c2c;

        &:hover {
            opacity: 0.7;
        }
    }

    #edit {
        background-color: #e3963e;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        padding-bottom: 1.2rem;

        .discard-btn,
        #edit,
        #save,
        #return {
            padding: 1rem;
        }

        #edit,
        #return {
            margin-left: initial;
        }
    }
`;
