import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 16px;
    height: 223px;
    padding: 32px;

    > h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE}
        
    }
    > p {
        margin-top: 15px;
        width: 100%;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // max nb lines to show
        -webkit-box-orient: vertical
    }

    >footer {
        margin-top: 20px;
        display:flex;
        gap: 8px

    }
`;