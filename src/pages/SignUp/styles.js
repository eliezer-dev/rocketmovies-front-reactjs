import styled from "styled-components";
import backgroundImg from '../../assets/shared/background-img.png'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 134px;

    >h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK}
    }

    p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY}
    }

    h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin: 48px 0;
        
    }

    a {
        margin-top: 42px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.PINK}
    }

`;

export const Background = styled.div`
    flex:1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;