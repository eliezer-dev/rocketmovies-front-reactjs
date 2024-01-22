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
    margin-top: 50px;
    padding: 0 125px;


    h2 {
        color: #FFF;
        font-size: 32px;
        font-weight: 400;
    }

    > button {
        width: 207px;
    }
`

export const Content = styled.div`
    margin-top: 38px;
    height: 100vh;
    padding: 0 125px;
    border: 1px solid red;

`;

