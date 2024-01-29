import styled from "styled-components";

export const Container = styled.div`
    > a {
        display: flex;
        align-items: center;
        gap: 6px;
        color: ${({theme}) => theme.COLORS.PINK}
    }


`;