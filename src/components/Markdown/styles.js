import styled from "styled-components";

export const Container = styled.div`
    width: min-content;
    margin: 16px;
    display: flex;
    align-items: center;
    padding: 16px;
    border: ${({theme, isnew}) => isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" };
    background: ${({theme, isnew}) => isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
    border-radius: 10px;

    > input {  
        background: transparent;        
        color: ${({theme, isnew}) => isnew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
        border:none;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 24px;
        width: 22px;
    }


`;