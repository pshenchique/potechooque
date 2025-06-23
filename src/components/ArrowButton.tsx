import React from "react";
import ArrowImage from "../assets/arrow-button.png";
import styled from "styled-components";

type ArrowButtonProps = {
    back?: boolean;
};

const FlipWrapper = styled.div<{ back: boolean }>`
    transform: ${({ back }) => (back ? "scaleX(-1)" : "none")};
    position: absolute;
    bottom: 30px;
    ${(props) => (props.back ? "left: 100px;" : "right: 100px;")}
`;

const StyledImage = styled.img<ArrowButtonProps>`
    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const ArrowButton: React.FC<ArrowButtonProps> = ({ back = false }) => {
    return (
        <FlipWrapper back={back}>
            <StyledImage src={ArrowImage} />;
        </FlipWrapper>
    );
};

export default ArrowButton;
