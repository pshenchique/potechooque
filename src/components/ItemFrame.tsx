import React from "react";
import styled from "styled-components";

type ItemFrameProps = {
    name: string;
    price: number;
    isActive?: boolean;
    pic: string;
    pic_active: string;
    onClick:(state:boolean) => void;
};

const FullFrame = styled.img`
    border-radius: 40px;
    border: solid 9px var(--color-primary);
    height: 60vh;
    overflow: hidden;

    &:hover {
        transform: none !important;
    }

    &:active {
        transform: none !important;
    }
`;

const SmallFrame = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
`;

const YellowRect = styled.div`
    position: absolute;
    width: 360px;
    height: 420px;
    background-color: var(--color-primary);
    border-radius: 40px;
    top: 60px;
    left: 80px;
    z-index: 1;
    box-shadow: 0px 4px 4px 0px #2d26265a;
`;

const OverlayImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const ItemName = styled.h1`
    font-family: "Korakatski";
    text-transform: uppercase;
    font-weight: 800;
    font-style: normal;
    color: var(--color-light);
    font-size: 32px;
`;

const ItemPrice = styled.h1`
    font-family: "Korakatski";
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
    color: var(--color-primary);
    font-size: 40px;
    text-shadow: 0px 4px 4px #2d26265a;
`;

const HStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover {
        transform: scale(1.1);

        img {
            transform: scale(1.2);
            transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
    }

    &:active {
        transform: scale(0.9);

        img {
            transform: scale(0.9);
            transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
    }

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const ItemFrame: React.FC<ItemFrameProps> = ({ name, price, isActive = false, pic, pic_active, onClick }: ItemFrameProps) => {
    return (
        <div onClick={()=>onClick(true)}>
            {isActive ? (
                <HStack>
                    <ItemName>{name}</ItemName>
                    <FullFrame src={pic_active} />
                    <ItemPrice>{price}р.</ItemPrice>
                </HStack>
            ) : (
                <HStack>
                    <SmallFrame>
                        <YellowRect />
                        <OverlayImage src={pic} />
                    </SmallFrame>

                    <ItemName>{name}</ItemName>
                </HStack>
            )}
        </div>
    );
};

export default ItemFrame;
