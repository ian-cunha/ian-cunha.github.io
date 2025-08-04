import styled from 'styled-components';

export const ProjectsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

export const ProjectsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ProjectCard = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
`;

export const ProjectContent = styled.div`
  padding: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.4;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const MoreProjectsButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.buttonText};
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(0.9);
  }
`;