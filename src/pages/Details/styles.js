import styled from "styled-components";

export const Container = styled.div`
    
`;


export const Content = styled.div`
    margin: 40px auto 0;
    width: 1137px;
    padding: 24px;
    height: 650px;
    overflow-y: auto;
    
    > a {            
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({theme}) => theme.COLORS.PINK}
        }

    > p {
        margin-top: 40px;
        color: ${({theme}) => theme.COLORS.WHITE};;
        text-align: justify;
        font-size: 16px;
        font-weight: 400;
    }    
`;

export const Title = styled.div`
    margin-top: 24px;
    display: flex;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 36px;
        font-weight: 500;
    }

    > span {
        margin-left: 19px;
        display: flex;
        align-items: center;
        > img {
            width: 20px;
            height: 20px;
        }
    }



`;

export const Autor = styled.div`
    padding-right: 24px;
    margin-top: 24px;
    height: 19px;
    width: 100%;
    display: flex;
    gap: 8px;
    >img {
        height: 16px;
        width: 16px;
    }

    > p {
        color: ${({theme}) => theme.COLORS.WHITE};
        text-align: justify;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const Tags = styled.div`
    margin-top:40px;
    display: flex;
    gap:16px
`;