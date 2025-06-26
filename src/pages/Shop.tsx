import React, { useEffect, useRef, useState } from "react";
import ItemFrame from "../components/ItemFrame";
import styled from "styled-components";

import ShopWindow from "../components/ShopWindow";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ShopItems, Thresholds } from "../Arrays";
import Bubbles from "../assets/bubbles.png";

const StyledContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 100px;
    width: 100%;
    padding-inline: 40vw;
    padding-top: 20vh;
    height: 100%;
    pointer-events: painted;
`;

const BubbleOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${Bubbles});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 5;
    pointer-events: none;
`;

const Shop = () => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [clickedItem, setClickedItem] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current!.offsetWidth); // Relative to viewport
        }
    }, []);

    const itemCount = ShopItems.length;

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [Thresholds[4] + 0.1, Thresholds[5] - 0.1], [0, -containerWidth * 1.25]);
    const indexFromScroll = useTransform(
        scrollYProgress,
        [Thresholds[4] + 0.1, Thresholds[5] - 0.1],
        [0, itemCount - 1]
    );

    useMotionValueEvent(indexFromScroll, "change", (latest) => {
        const index = Math.round(latest);
        if (index !== activeItem && index >= 0 && index < itemCount) {
            setActiveItem(index);
        }
    });

    return (
        <div>
            <BubbleOverlay></BubbleOverlay>
            {isWindowOpen && <ShopWindow key="shop-window" setIsActive={setIsWindowOpen} index={clickedItem} />}

            {!isWindowOpen && (
                <StyledContainer style={{ x }} ref={containerRef}>
                    {ShopItems.map((item, index) => (
                        <ItemFrame
                            name={item.name}
                            price={item.price}
                            image_small={item.image_small ?? null}
                            image_main={item.image_main ?? null}
                            isActive={index === activeItem}
                            onClick={() => {
                                setClickedItem(index);
                                setIsWindowOpen(true);
                            }}
                        />
                    ))}
                </StyledContainer>
            )}
        </div>
    );
};

export default Shop;
