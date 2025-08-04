import styled from 'styled-components';

export const LinksSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const LinksTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: wrap;
    gap: 2rem;
  }
`;

export const LinkItem = styled.li`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${(props) => props.theme.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;