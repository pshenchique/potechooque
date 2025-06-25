import { easeInOut, motion } from 'framer-motion'
import styled from 'styled-components';

const StyledContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-light);
        font-family: "Korakatski";
        text-transform: uppercase;
        font-weight: 800;
        font-style: normal;
    }
`;

const Info = () => {
  return (
      <StyledContainer
          initial={{ x: "80vw" }}
          animate={{ x: 0 }}
          exit={{ x: "80vw" }}
          transition={{ duration: 0.5, ease: easeInOut }}
      >
          <h1>Почучуть...</h1>
      </StyledContainer>
  );
}

export default Info