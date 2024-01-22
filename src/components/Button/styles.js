import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    border-radius: 10px;
    background: ${({theme}) => theme.COLORS.PINK};
    height: 56px;
    align-items: center;
    color: ${({theme}) => theme.COLORS.BLACKGROUND_800};
    font-weight: 500;
    padding: 0 16px;

    &:disabled {
        opacity: 0.5;
    }
`;