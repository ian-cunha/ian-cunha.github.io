import styled from 'styled-components';

export const AwardsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

export const AwardsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const AwardCard = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const AwardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
`;

export const AwardContent = styled.div`
  padding: 1rem;
`;

export const AwardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
`;

export const AwardDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.4;
`;

export const AwardDate = styled.span`
  display: block;
  font-size: 0.85rem;
  color: ${(props) => props.theme.secondaryText};
  margin-top: 0.5rem;
`;