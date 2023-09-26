import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: #000;
    margin: 3rem 0;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .suffix {
        font-size: 4rem;
        font-weight: bold;
    }

    .title {
        font-weight: 400;
        font-size: 4rem;
    }

    .suffix,
    .title {
        margin-bottom: 0;
    }

    .borderB {
        border-bottom: 1px dashed #bbb !important;
        padding-bottom: 1.6rem;
    }
`;
