import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    margin: 40px 110px 85px;
    max-height: 100vh;
    overflow-y: auto;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 36px;
        margin-top: 24px;
        font-weight: 500;
    }

   
    svg {
        align-self: center;
        font-size: 18px;
        color: ${({theme}) => theme.COLORS.PINK}
    }

    > .input {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        gap: 40px
    }

    > textarea {
        margin-top: 40px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        width: 100%;
        height: 274px;
        padding: 19px;
        border: none;
        border-radius: 10px;
        resize: none;
        
        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
        margin: 40px 0 24px;
    }

    > .markdowns {
        background: #0D0C0F;
        display: flex;
        flex-wrap: wrap;
        border-radius: 8px;
        gap: 24px
        
    }

    > .buttons {
        margin-top: 40px;
        display: flex;
        gap: 40px;
        width: 100%;
        
    }

`;