import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px auto auto;
    grid-template-areas: 
    "header"
    "title"
    "synopsis"
    ;
`;

export const Title = styled.div `
    grid-area: title;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    padding: 0 125px;


    h2 {
        width: 100%;
        color: #FFF;
        font-size: 32px;
        font-weight: 400;
    }

    > button {
        width: 207px;
    }
`

export const Content = styled.div`
    padding-right: 8px;
    margin: 24px 125px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;


`;

