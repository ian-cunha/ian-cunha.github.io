import styled from 'styled-components';

export const LanguagesSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const LanguagesTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const LanguagesList = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LanguageItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
  }

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1;
    font-size: 0.875rem;
  }
`;