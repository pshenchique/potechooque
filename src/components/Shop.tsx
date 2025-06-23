import React, { useState } from "react";
import ItemFrame from "./ItemFrame";
import styled from "styled-components";
import i1 from "../assets/shop/1.jpg";
import i2 from "../assets/shop/2.png";
import i3 from "../assets/shop/3.png";
import ShopWindow from "./ShopWindow";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const StyledContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    width: 100%;
    padding-left: 50px;
    height: 100%;
`;

const Shop = () => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    return (
        <>
            <AnimatePresence mode="wait">
                {isWindowOpen && <ShopWindow key="shop-window" isActive={isWindowOpen} setIsActive={setIsWindowOpen} />}

                {!isWindowOpen && (
                    <StyledContainer
                        key="b"
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0, transition: { duration: 0.5, ease: easeInOut } }}
                        exit={{ x: "-100vw", transition: { duration: 0.5, ease: easeInOut } }}
                    >
                        <ItemFrame name="карабин" price={800} pic={i2} pic_active={i1} onClick={setIsWindowOpen} />
                        <ItemFrame
                            isActive
                            name="карабин"
                            price={800}
                            pic={i2}
                            pic_active={i1}
                            onClick={setIsWindowOpen}
                        />
                        <ItemFrame name="карабин" price={800} pic={i3} pic_active={i1} onClick={setIsWindowOpen} />
                    </StyledContainer>
                )}
            </AnimatePresence>
        </>
    );
};

export default Shop;
