import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
  min-height: 100vh;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Section = styled.section`
  color: ${(props) => props.theme.text};
  width: 100%;
`;

export const Divider = styled.div`
  background: ${(props) => props.theme.secondaryText};
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
`;