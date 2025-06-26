import styled, { css } from "styled-components";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { Thresholds } from "../Arrays";

const ScrollTo = (index: number) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = scrollHeight * (Thresholds[index] + 0.01);
    window.scrollTo({
        top: targetY,
        behavior: "smooth",
    });
};

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    height: 100svh;
    width: 100px;
    margin-left: 50px;
    position: absolute;
    z-index: 10;
    user-select: none;
`;

const MenuItemInheritedItems = css<{ clicked: boolean; window: boolean }>`
    font-family: Korakatski, sans-serif;
    font-weight: 400;
    font-style: italic;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;

    color: ${(props) =>
        props.window
            ? props.clicked
                ? "var(--color-secondary)"
                : "var(--color-dark)"
            : props.clicked
              ? "var(--color-primary)"
              : "var(--color-light)"};

    &:hover {
        color: ${(props) =>
            props.window
                ? "var(--color-secondary-darker)"
                : props.clicked
                  ? "var(--color-primary)"
                  : "var(--color-secondary)"};
    }

    &:active {
        color: ${(props) =>
            props.window
                ? "var(--color-secondary-darker)"
                : props.clicked
                  ? "var(--color-primary)"
                  : "var(--color-secondary-darker)"};
    }

    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MenuItem = styled.p<{ clicked: boolean; window: boolean }>`
    writing-mode: vertical-rl; /* Rotates text 90 degrees */
    transform: rotate(180deg); /* Adjusts orientation for readability */
    text-align: center;
    font-size: 13px;
    cursor: pointer;

    ${MenuItemInheritedItems}

    font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

    &:hover {
        transform: scale(1.1) rotate(180deg);
    }

    &:active {
        transform: scale(0.85) rotate(180deg);
    }

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const SecondContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    align-items: center;
    gap: 10px;
`;

const StyledList = styled(motion.ul)`
    list-style-type: disc;
`;

const HorMenuItem = styled.li<{ clicked: boolean; window: boolean }>`
    text-align: start;
    margin: 20px 0;

    ${MenuItemInheritedItems}

    font-weight: ${(props) => (props.clicked ? "bold" : "normal")};

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.85);
    }

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

type NavbarProps = {
    isWindowActive: boolean;
    isActive: number;
    setIsActive: (index: number) => void;
};

export default function Navbar({ isActive, setIsActive, isWindowActive }: NavbarProps) {
    return (
        <MenuContainer>
            <Logo
                isClicked={isActive === 0}
                onClick={() => {
                    if (!isWindowActive) {
                        setIsActive(0);
                        ScrollTo(0);
                    }
                }}
                isWindowActive={isWindowActive}
            />
            <MenuItem
                onClick={() => {
                    if (!isWindowActive) {
                        setIsActive(1);
                        ScrollTo(1);
                    }
                }}
                clicked={1 === isActive}
                window={isWindowActive}
            >
                похудожим
            </MenuItem>
            <SecondContainer>
                <MenuItem
                    onClick={() => {
                        if (!isWindowActive) {
                            setIsActive(2);
                            ScrollTo(2);
                        }
                    }}
                    clicked={2 === isActive || 3 === isActive}
                    window={isWindowActive}
                >
                    режиссура
                    <br />
                    арт-дирекшн
                </MenuItem>
                <AnimatePresence>
                    {(isActive == 2 || isActive == 3) && (
                        <StyledList
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <HorMenuItem
                                onClick={() => {
                                    if (!isWindowActive) {
                                        setIsActive(2);
                                        ScrollTo(2);
                                    }
                                }}
                                clicked={2 === isActive}
                                window={isWindowActive}
                            >
                                студенческие работы
                            </HorMenuItem>
                            <HorMenuItem
                                onClick={() => {
                                    if (!isWindowActive) {
                                        setIsActive(3);
                                        ScrollTo(3);
                                    }
                                }}
                                clicked={3 === isActive}
                                window={isWindowActive}
                            >
                                коммерция
                            </HorMenuItem>
                        </StyledList>
                    )}
                </AnimatePresence>
            </SecondContainer>

            <MenuItem
                onClick={() => {
                    if (!isWindowActive) {
                        setIsActive(4);
                        ScrollTo(4);
                    }
                }}
                clicked={4 === isActive}
                window={isWindowActive}
            >
                мерч
            </MenuItem>
            <MenuItem
                onClick={() => {
                    if (!isWindowActive) {
                        setIsActive(5);
                        ScrollTo(5);
                    }
                }}
                clicked={5 === isActive}
                window={isWindowActive}
            >
                о нас
            </MenuItem>
        </MenuContainer>
    );
}
