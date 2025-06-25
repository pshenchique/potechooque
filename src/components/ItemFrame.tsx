import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type ItemFrameProps = {
    name: string;
    price: number;
    isActive?: boolean;
    image_small: string | null;
    image_main: string | null;
    onClick: (state: boolean) => void;
};

const FullFrame = styled(motion.img)`
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

const SmallFrame = styled(motion.div)`
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
    object-fit: contain;
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
    text-align: center;
`;

const ItemPrice = styled(motion.h1)`
    font-family: "Korakatski";
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
    color: var(--color-primary);
    font-size: 40px;
    text-shadow: 0px 4px 4px #2d26265a;
    margin-top: 10px;
`;

const HStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
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

const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: easeInOut },
};

const ItemFrame: React.FC<ItemFrameProps> = ({
    name,
    price,
    isActive = false,
    image_main,
    image_small,
    onClick,
}: ItemFrameProps) => {
    return (
        <div onClick={() => onClick(true)}>
            <AnimatePresence>
                <HStack>
                    <ItemName>{name}</ItemName>

                    {/* {image_main && isActive ? (
                        <FullFrame {...fadeInOut} src={image_main} />
                    ) : (
                        <SmallFrame {...fadeInOut}>
                            <YellowRect />
                            <OverlayImage src={image_small ?? image_main!} />
                        </SmallFrame>
                    )} */}

                    <SmallFrame {...fadeInOut}>
                        <YellowRect />
                        <OverlayImage src={image_small ?? image_main!} />
                    </SmallFrame>

                    {isActive && <ItemPrice {...fadeInOut}>{price}р.</ItemPrice>}
                </HStack>
            </AnimatePresence>
        </div>
    );
};

export default ItemFrame;
