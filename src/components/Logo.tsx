import styled from "styled-components";

const StyledSVG = styled.svg<{ clicked?: boolean; window: boolean }>`
    cursor: pointer;

    & path {
        fill: ${(props) =>
            props.window
                ? props.clicked
                    ? "var(--color-secondary)"
                    : "var(--color-dark)"
                : props.clicked
                  ? "var(--color-primary)"
                  : "var(--color-light)"};
        transition: fill 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover path {
        fill: ${(props) =>
            props.window
                ? "var(--color-secondary-darker)"
                : props.clicked
                  ? "var(--color-primary)"
                  : "var(--color-secondary)"};
        transition:
            fill 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:active {
        fill: ${(props) =>
            props.window
                ? "var(--color-secondary-darker)"
                : props.clicked
                  ? "var(--color-primary)"
                  : "var(--color-secondary-darker)"};
        transform: scale(0.85);

        transition:
            transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            fill 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

type LogoProps = {
    isClicked?: boolean;
    onClick?: () => void;
    isWindowActive: boolean;
};

const Logo = ({ isClicked = false, onClick, isWindowActive }: LogoProps) => {
    const handleClick = () => {
        console.log("SVG clicked!");
        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledSVG
            width="112"
            height="134"
            viewBox="0 0 112 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            clicked={isClicked}
            onClick={handleClick}
            window={isWindowActive}
        >
            <path d="M58.0725 44.4759L80.6469 0L61.3632 44.4759C59.384 49.0413 61.3556 52.7033 65.8848 52.8702L110 54.5L64.3495 56.1298C59.6631 56.2967 54.2449 59.96 51.9275 64.5241L29.3531 109L48.6368 64.5241C50.616 59.9587 48.6444 56.2967 44.1152 56.1298L0 54.5L45.6505 52.8702C50.3369 52.7033 55.7551 49.04 58.0725 44.4759Z" />
            <path d="M78.1731 55L89.1591 55.0013C89.1591 55.0013 56.2778 119.216 63.2559 123.637C70.8059 130.583 95 97.8347 95 97.8347C95 97.8347 69.9715 138.576 54.5934 133.574C39.2152 128.573 78.1731 55.0013 78.1731 55.0013V55Z" />
            <path d="M105 87C108.866 87 112 83.6421 112 79.5C112 75.3579 108.866 72 105 72C101.134 72 98 75.3579 98 79.5C98 83.6421 101.134 87 105 87Z" />
        </StyledSVG>
    );
};

export default Logo;
