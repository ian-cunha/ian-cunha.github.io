import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.p)`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
`;