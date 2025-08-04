import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const VerifiedImg = styled.img`
  width: 1.25rem;
  height: 1.5rem;
`;

export const Location = styled(motion.span)`
  font-size: 1.25rem;
  color: ${(props) => props.theme.secondaryText};
`;