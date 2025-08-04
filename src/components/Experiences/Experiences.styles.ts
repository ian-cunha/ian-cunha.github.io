import styled from 'styled-components';

export const ExpSection = styled.div`
  margin-top: 2.5rem;
`;

export const ExpTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const ExpList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ExpItem = styled.li`
  position: relative;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    height: calc(80% + 1rem);
    width: 2px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.2), ${(props) => props.theme.accent});
  }
`;

export const ExpDetails = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
`;

export const JobTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
`;

export const JobCompany = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
`;

export const JobDesc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.5;
  text-align: justify;
`;

export const JobDate = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
  display: block;
  margin-top: 0.25rem;
`;