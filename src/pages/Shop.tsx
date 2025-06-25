import React, { useEffect, useRef, useState } from "react";
import ItemFrame from "../components/ItemFrame";
import styled from "styled-components";

import ShopWindow from "../components/ShopWindow";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ShopItems, Thresholds } from "../Arrays";

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
    const x = useTransform(scrollYProgress, [Thresholds[4], Thresholds[5]], [0, -containerWidth * 1.22]);
    const indexFromScroll = useTransform(scrollYProgress, [Thresholds[4], Thresholds[5]], [0, itemCount - 1]);

    useMotionValueEvent(indexFromScroll, "change", (latest) => {
        const index = Math.round(latest);
        if (index !== activeItem && index >= 0 && index < itemCount) {
            setActiveItem(index);
        }
    });

    return (
        <>
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
        </>
    );
};

export default Shop;
