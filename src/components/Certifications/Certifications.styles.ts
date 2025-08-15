import styled from 'styled-components';

export const CertificationsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

export const CertificationsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const CertificationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  transition: transform 0.2s ease;
  min-width: 0;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CertificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;

export const CertIconImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CertificationInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CertificationName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.text};
`;

export const CertificationIssuer = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.secondaryText};
  margin: 0.25rem 0 0;
`;

export const CertificationLink = styled.a`
  color: ${(props) => props.theme.accent};
  margin-left: auto;
  text-decoration: none;
  font-size: 1.25rem;

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