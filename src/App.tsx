import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import verified from './assets/verified.svg';
import reactnative from './assets/react-native.svg';
import javascript from './assets/javascript.svg';
import figma from './assets/figma.svg';
import sql from './assets/sql.svg';
import python from './assets/python.svg';
import java from './assets/java.svg';
import englishIcon from './assets/english.svg';
import portugueseIcon from './assets/portuguese.svg';
import spanishIcon from './assets/spanish.svg';
import whatsappIcon from './assets/whatsapp.svg';
import instagramIcon from './assets/instagram.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import xIcon from './assets/x.svg';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  secondaryText: '#666666',
  accent: '#00ff00',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  secondaryText: '#a1a1aa',
  accent: '#00ff00',
};

const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
  min-height: 100vh;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const Section = styled.section`
  color: ${(props) => props.theme.text};
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const VerifiedImg = styled.img`
  width: 1.25rem;
  height: 1.5rem;
`;

const Location = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme.secondaryText};
`;

const Divider = styled.div`
  background: ${(props) => props.theme.secondaryText};
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
`;

const About = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
`;

const ExpSection = styled.div`
  margin-top: 2.5rem;
`;

const ExpTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const ExpList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpItem = styled.li`
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

const ExpDetails = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
`;

const JobTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
`;

const JobCompany = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
`;

const JobDesc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.5;
  text-align: justify;
`;

const JobDate = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
  display: block;
  margin-top: 0.25rem;
`;

const SkillsSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const SkillsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
  max-width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillImg = styled.img`
  width: 3rem;
  height: 3rem;
`;

const LanguagesSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const LanguagesTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
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

const LinksSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const LinksTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const LinksList = styled.ul`
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

const LinkItem = styled.li`
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

const ThemeToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? '🌞' : '🌙'}
        </ThemeToggleButton>
        <Section>
          <Header>
            <Title
              as={motion.h1}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ian Cunha
            </Title>
            <VerifiedImg alt="verified" src={verified} />
          </Header>
          <Location
            as={motion.span}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Pernambuco, Brasil
          </Location>
          <Divider />
          <About
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Desenvolvedor Mobile e Full Stack com sólida expertise em React Native, React, Python e NoSQL.
            Especializado no desenvolvimento de soluções digitais inovadoras, desde aplicativos móveis e sistemas robustos até landing pages de alta conversão. Apaixonado por transformar ideias em produtos funcionais, com foco em usabilidade, design intuitivo e desempenho excepcional.
          </About>
        </Section>
        <ExpSection
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <ExpTitle>EXPERIÊNCIAS</ExpTitle>
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
        <SkillsSection
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <SkillsTitle>PRINCIPAIS HABILIDADES</SkillsTitle>
          <SkillsContainer>
            <SkillItem>
              <SkillImg alt="React Native" src={reactnative} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="Python" src={python} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="JavaScript" src={javascript} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="Figma" src={figma} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="SQL" src={sql} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="Java" src={java} />
            </SkillItem>
          </SkillsContainer>
        </SkillsSection>
        <LanguagesSection
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <LanguagesTitle>IDIOMAS</LanguagesTitle>
          <LanguagesList>
            <LanguageItem data-tooltip="Fluente">
              <img alt="Português" src={portugueseIcon} />
            </LanguageItem>
            <LanguageItem data-tooltip="Intermediário">
              <img alt="Inglês" src={englishIcon} />
            </LanguageItem>
            <LanguageItem data-tooltip="Iniciante">
              <img alt="Espanhol" src={spanishIcon} />
            </LanguageItem>
          </LanguagesList>
        </LanguagesSection>
        <LinksSection
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <LinksTitle>LINKS</LinksTitle>
          <LinksList>
            <LinkItem>
              <img alt="WhatsApp" src={whatsappIcon} width={20} height={20} />
              <a href="https://wa.me/5581994640585" target="_blank" rel="noopener noreferrer">
                (81) 99464-0585
              </a>
            </LinkItem>
            <LinkItem>
              <img alt="Instagram" src={instagramIcon} width={20} height={20} />
              <a href="https://www.instagram.com/ian.pictures/" target="_blank" rel="noopener noreferrer">
                @ian.pictures
              </a>
            </LinkItem>
            <LinkItem>
              <img alt="GitHub" src={githubIcon} width={20} height={20} />
              <a href="https://github.com/ian-cunha" target="_blank" rel="noopener noreferrer">
                @ian-cunha
              </a>
            </LinkItem>
            <LinkItem>
              <img alt="LinkedIn" src={linkedinIcon} width={20} height={20} />
              <a href="https://www.linkedin.com/in/iancunha/" target="_blank" rel="noopener noreferrer">
                Ian Cunha
              </a>
            </LinkItem>
            <LinkItem>
              <img alt="X" src={xIcon} width={20} height={20} />
              <a href="https://x.com/inatus0x" target="_blank" rel="noopener noreferrer">
                @inatus0x
              </a>
            </LinkItem>
          </LinksList>
        </LinksSection>
      </Main>
    </ThemeProvider>
  );
};

export default App;
