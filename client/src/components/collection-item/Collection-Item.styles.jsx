import styled from 'styled-components'
import CustomButton from "../custom-button/CustomButton.component";

export const CollectionItemContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 400px;
    align-items: center;
    position: relative;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    border-radius: 8px;
    overflow: hidden;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    padding-bottom: 30px;

    @media screen and (max-width: 768px) {
        width: 42vw;
    }

    @media screen and (max-width: 576px) {
        width: 100vw;
    }
    
    &:hover{
        transform: scale(1.03);
        box-shadow: 0 0 10px 1px rgba(0,0,0,0.20);
    }
`;

export const CollectionItemImage = styled.div`
    width: 100%;
    height: 85%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: 0.2s linear;
`;

export const CollectionItemFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 0 10px 10px;

    .name {
        font-weight: 600;
        color: #1a1a1a;
    }

    .price {
        color: #666666;
    }
`;

export const CollectionItemButton = styled(CustomButton)`
    width: 60%;
    transition: 0.2s linear;
    margin: 5px 5px 20px;
`;

