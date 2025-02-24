import React from 'react';
import styled from 'styled-components';

import verified from './assets/verified.svg'

import react from './assets/react.svg'
import reactnative from './assets/react-native.svg'
import typescript from './assets/typescript.svg'
import figma from './assets/figma.svg'
import sql from './assets/sql.svg'
import php from './assets/php.svg'

import englishIcon from './assets/english.svg';
import portugueseIcon from './assets/portuguese.svg';
import spanishIcon from './assets/spanish.svg';

import whatsappIcon from './assets/whatsapp.svg';
import instagramIcon from './assets/instagram.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import xIcon from './assets/x.svg';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 800px;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const Section = styled.section`
  color: #ffffff;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
`;

const VerifiedImg = styled.img`
  width: 1rem;
  height: 1.125rem;
`;

const Location = styled.span`
  font-size: 1rem;
  color: #a1a1aa;
`;

const Divider = styled.div`
  background: #27272a;
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
`;

const About = styled.p`
  color: #a1a1aa;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
`;

const ExpSection = styled.div`
  margin-top: 2.5rem;
`;

const ExpTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
`;

const ExpList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpItem = styled.li`
  position: relative;
  margin-bottom: 2rem;
  color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    height: calc(100% + 1rem);
    width: 2px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.2), #00ff00);
  }

  &:first-of-type:before {
    background: #ffffff;
  }
`;

const ExpDetails = styled.div`
  margin-left: 2rem;
`;

const JobTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
`;

const JobCompany = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
`;

const JobDesc = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  text-align: justify;
`;

const JobDate = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  margin-top: 0.25rem;
`;

const SkillsSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const SkillsTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const LanguagesSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const LanguagesTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const LanguagesList = styled.div`
  display: flex;
  gap: 1rem;
`;

const LanguageItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
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

const LinksSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const LinksTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LinkItem = styled.li`
  color: #a1a1aa;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #00ff00;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const App: React.FC = () => {
  return (
    <Main>
      <Section>
        <Header>
          <Title>Ian Cunha</Title>
          <VerifiedImg alt="verified" src={verified} />
        </Header>
        <Location>Pernambuco, Brasil</Location>
        <Divider />
        <About>
        Desenvolvedor Mobile e Full Stack com sólida expertise em React Native, React, Python e NoSQL
        Especializado no desenvolvimento de soluções digitais inovadoras, desde aplicativos móveis e sistemas robustos até landing pages de alta conversão. Apaixonado por transformar ideias em produtos funcionais, com foco em usabilidade, design intuitivo e desempenho excepcional.
        </About>
      </Section>
      <ExpSection>
        <ExpTitle>WORK EXPERIENCE</ExpTitle>
        <ExpList>
          <ExpItem>
            <ExpDetails>
              <JobTitle>Desenvolvedor Full Stack/Mobile</JobTitle>
              <JobCompany>Real Estate AI Planner</JobCompany>
              <JobDate>mai de 2024 - o momento</JobDate>
              <JobDesc>
                Desenvolvedor React Native, React, PHP e UX/UI Designer,
                focado na criação de soluções digitais inovadoras.
              </JobDesc>
            </ExpDetails>
          </ExpItem>
          <ExpItem>
            <ExpDetails>
              <JobTitle>Desenvolvedor Frontend</JobTitle>
              <JobCompany>Marta Inteligência Imobiliária</JobCompany>
              <JobDate>dez de 2021 - out de 2024</JobDate>
              <JobDesc>
                Desenvolvimento Web e UI/UX focado em landing pages imobiliárias, React,
                JavaScript, Bootstrap, Axios e PHP para criar sites responsivos e funcionais.
                Fazendo integrações, manutenção e colaborando com design e marketing.
              </JobDesc>
            </ExpDetails>
          </ExpItem>
          <ExpItem>
            <ExpDetails>
              <JobTitle>Estágiario</JobTitle>
              <JobCompany>Marta Inteligência Imobiliária</JobCompany>
              <JobDate>jan de 2021 - dez de 2021</JobDate>
              <JobDesc>
                Desenvolvimento Web e UI/UX focado em landing pages imobiliárias em
                PHP/JavaScript. Fazendo integrações, manutenção e colaborando com
                design e marketing.
              </JobDesc>
            </ExpDetails>
          </ExpItem>
          <ExpItem>
            <ExpDetails>
              <JobTitle>Designer</JobTitle>
              <JobCompany>Academia Superação</JobCompany>
              <JobDate>out de 2018 - dez de 2020</JobDate>
              <JobDesc>
                Atuando em criação de peças para redes sociais e edição de vídeos,
                ferramentas usadas: Photoshop, Illustrator, Premiere entre outras.
              </JobDesc>
            </ExpDetails>
          </ExpItem>
        </ExpList>
      </ExpSection>
      <SkillsSection>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsContainer>
          <SkillItem>
            <SkillImg alt="React Native" src={reactnative} />
          </SkillItem>
          <SkillItem>
            <SkillImg alt="React" src={react} />
          </SkillItem>
          <SkillItem>
            <SkillImg alt="Typescript" src={typescript} />
          </SkillItem>
          <SkillItem>
            <SkillImg alt="Figma" src={figma} />
          </SkillItem>
          <SkillItem>
            <SkillImg alt="SQL" src={sql} />
          </SkillItem>
          <SkillItem>
            <SkillImg alt="PHP" src={php} />
          </SkillItem>
        </SkillsContainer>
      </SkillsSection>
      <LanguagesSection>
        <LanguagesTitle>LANGUAGES</LanguagesTitle>
        <LanguagesList>
          <LanguageItem data-tooltip="Intermediário">
            <img alt="Inglês" src={englishIcon} />
          </LanguageItem>
          <LanguageItem data-tooltip="Fluente">
            <img alt="Português" src={portugueseIcon} />
          </LanguageItem>
          <LanguageItem data-tooltip="Iniciante">
            <img alt="Espanhol" src={spanishIcon} />
          </LanguageItem>
        </LanguagesList>
      </LanguagesSection>
      <LinksSection>
        <LinksTitle>LINKS</LinksTitle>
        <LinksList>
          <LinkItem>
            <img alt="WhatsApp" src={whatsappIcon} width={20} height={20} />
            <a href="https://wa.me/5581994640585" target="_blank" rel="noopener noreferrer">(81) 99464-0585</a>
          </LinkItem>
          <LinkItem>
            <img alt="Instagram" src={instagramIcon} width={20} height={20} />
            <a href="https://www.instagram.com/ian.pictures/" target="_blank" rel="noopener noreferrer">@ian.pictures</a>
          </LinkItem>
          <LinkItem>
            <img alt="GitHub" src={githubIcon} width={20} height={20} />
            <a href="https://github.com/ian-cunha" target="_blank" rel="noopener noreferrer">@ian-cunha</a>
          </LinkItem>
          <LinkItem>
            <img alt="LinkedIn" src={linkedinIcon} width={20} height={20} />
            <a href="https://www.linkedin.com/in/iancunha/" target="_blank" rel="noopener noreferrer">Ian Cunha</a>
          </LinkItem>
          <LinkItem>
            <img alt="X" src={xIcon} width={20} height={20} />
            <a href="https://x.com/inatus0x" target="_blank" rel="noopener noreferrer">@inatus0x</a>
          </LinkItem>
        </LinksList>
      </LinksSection>
    </Main>
  );
};

export default App;
