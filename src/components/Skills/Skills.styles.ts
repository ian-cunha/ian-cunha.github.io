import styled from 'styled-components';

export const SkillsSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const SkillsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const SkillsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
  max-width: 100%;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillImg = styled.img`
  width: 3rem;
  height: 3rem;
`;