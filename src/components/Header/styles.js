import styled from "styled-components";

export const Container = styled.div`
    height: 116px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    padding: 24px 0;
    justify-content: center;
    align-items: center;
    gap: 64px;

 

    > p {
        color: ${({theme}) => theme.COLORS.PINK};
        width: 170px;
        font-size: 24px;
        font-weight: 700;
        height: 100%;
        display: flex;
        align-items: center;
        

    }

    > .searchTitles  {
        width: 630px;
    }
`;

export const Profile = styled.div`
    width: 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > ul {
        font-size: 14px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE};
        list-style: none;
        text-align: right;
    }        
         
    a {
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-size: 14px;
            justify-content: end;
            text-align: right;
            width: 100%;
    }
    
    
`