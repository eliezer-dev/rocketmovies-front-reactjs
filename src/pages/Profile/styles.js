import styled from "styled-components";

export const Container = styled.div`
`;

export const Header = styled.div`
    padding-left: 144px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 144px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Picture = styled.div`
    position: relative;
    width: 186px;
    background: transparent;
    margin: -90px auto 64px;
    

    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    > label {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.PINK};
        bottom: 7px;
        right: 7px;
        
        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }

`;

export const Form = styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    svg {
        color: ${({theme}) => theme.COLORS.GRAY_200}
    }
`;