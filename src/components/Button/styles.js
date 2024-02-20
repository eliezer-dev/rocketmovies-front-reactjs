import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border: none;
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
   
`;
