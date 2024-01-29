import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    
    button {
        border: none;
        width: 100%;
        border-radius: 10px;
        background: ${({theme}) => theme.COLORS.PINK};
        height: 48px;
        align-items: center;
        color: ${({theme}) => theme.COLORS.BLACKGROUND_800};
        font-weight: 500;
        padding: 0 32px;

    &:disabled {
            background: #0D0C0F;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    } 
   
`;
