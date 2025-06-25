import styled from "styled-components";

const StyledImage = styled.div<{ scale: number; border: number; top: number; image:string }>`
    width: 380px;
    height: 200px;
    border-radius: 500px;
    border: ${(props) => props.border}px solid var(--color-primary);
    transform: scale(${(props) => props.scale});
    position: absolute;
    top: ${(props) => props.top}px;
    background-image: url(${(props)=>(props.image)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: screen;

    &:hover {
        border: ${(props) => props.border}px solid var(--color-secondary);
        background-color: var(--color-secondary);
        transform: scale(${(props) => props.scale + 0.1});
    }

    &:active {
        border: ${(props) => props.border}px solid var(--color-secondary-darker);
        background-color: var(--color-secondary-darker);
        transform: scale(${(props) => props.scale - 0.15});
    }

    transition:
        background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        border 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

type BubblePlayerProps = {
    scale: number;
    border: number;
    top: number;
    image: string
    onClick: () => void;
};

export default function BubblePlayer({ scale, border, top, image, onClick }: BubblePlayerProps) {
    return <StyledImage scale={scale / 10} border={border} top={top} onClick={onClick} image={image}/>;
}
