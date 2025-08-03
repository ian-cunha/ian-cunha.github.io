import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

// Importações SVG
import verified from './assets/verified.svg';
import reactnative from './assets/react-native.svg';
import typescript from './assets/typescript.svg';
import sql from './assets/sql.svg';
import linux from './assets/linux.svg';
import java from './assets/java.svg';
import englishIcon from './assets/english.svg';
import portugueseIcon from './assets/portuguese.svg';
import spanishIcon from './assets/spanish.svg';
import whatsappIcon from './assets/whatsapp.svg';
import instagramIcon from './assets/instagram.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import xIcon from './assets/x.svg';

// Importações para projetos
import fenixConnectImg from './assets/projects/fenixconnect.png';
import suapeVisionImg from './assets/projects/suapevision.png';
import tamassaImg from './assets/projects/tamassa.png';

// Importações para premiações
import innovareImg from './assets/awards/innovare.png';
import kaririImg from './assets/awards/kariri.png';
import suapeImg from './assets/awards/suapevisionpremio.png';

// Ícone para certificações
import certificateIcon from './assets/certificate.svg';
import certificaUniversity from './assets/RVDD.pdf';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  secondaryText: '#666666',
  accent: '#00ff00',
  card: '#f5f5f5',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  secondaryText: '#a1a1aa',
  accent: '#00ff00',
  card: '#2a2a2a',
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

// Componentes para a seção de Projetos
const ProjectsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

const ProjectsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ProjectCard = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.4;
`;

const ProjectLink = styled.a`
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

// Componentes para a seção de Premiações
const AwardsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

const AwardsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const AwardCard = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AwardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
`;

const AwardContent = styled.div`
  padding: 1rem;
`;

const AwardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
`;

const AwardDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.4;
`;

const AwardDate = styled.span`
  display: block;
  font-size: 0.85rem;
  color: ${(props) => props.theme.secondaryText};
  margin-top: 0.5rem;
`;

// Componentes para a seção de Certificações
const CertificationsSection = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`;

const CertificationsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`;

const CertificationItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.card};
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const CertificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;

const CertIconImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.text};
`;

const CertificationIssuer = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.secondaryText};
  margin: 0.25rem 0 0;
`;

const CertificationLink = styled.a`
  color: ${(props) => props.theme.accent};
  margin-left: auto;
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

const MoreProjectsButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.accent};
  color: #000;
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

  const projects = [
    {
      id: 1,
      title: "Fenix Connect",
      description: "O FenixConnect, é uma plataforma de cursos destinada a egressos e seus familiares. Desenvolvido em React Native e integrado ao Firebase.",
      image: fenixConnectImg,
      link: "https://fenixconnect.com.br"
    },
    {
      id: 2,
      title: "SUAPE Vision",
      description: "O SUAPE Vision é uma API desenvolvida em Python para gerenciar dados dos navios. Ela fornece dados para acessar informações em tempo real de saída e entrada.",
      image: suapeVisionImg,
      link: "https://github.com/ian-cunha/suape-vision-py"
    },
    {
      id: 3,
      title: "Tá Massa",
      description: "Totem que ajuda na manutenção de áreas públicas, permitindo que os cidadãos registrem problemas e solicitem serviços.",
      image: tamassaImg,
      link: "https://www.linkedin.com/posts/iancunha_conquista-hackaton-recife-activity-7000205363929059328-CHzy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8mURgBXqpvqJqW1JpNbEOhc9Fj6etsFxE"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Hackathon Cidadão 9.0",
      description: "Desenvolvemos uma solução usando o urbanismo tático para manutenção urbana e conseguimos o 1° lugar.",
      image: kaririImg,
      date: "2022"
    },
    {
      id: 2,
      title: "Prêmio Innovare",
      description: "Finalista do Prêmio Innovare na categoria Justiça e Cidadania com o projeto Fenix Connect.",
      image: innovareImg,
      date: "2024"
    },
    {
      id: 3,
      title: "Hackathon Suape",
      description: "Projeto com maior impacto social, com o projeto SUAPE Vision.",
      image: suapeImg,
      date: "2024"
    }
  ];

  const certifications = [
    {
      id: 0,
      name: "Análise de desenvolvimento de Sistemas",
      issuer: "Estácio de Sá",
      link: certificaUniversity
    },
    {
      id: 1,
      name: "React Native",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/TZIYOE9I.pdf"
    },
    {
      id: 2,
      name: "ReactJS",
      issuer: "Alura",
      link: "https://cursos.alura.com.br/certificate/0d544f0d-713e-47b5-9195-fa1021cb8487"
    },
    {
      id: 3,
      name: "JavaScript",
      issuer: "Alura",
      link: "https://cursos.alura.com.br/certificate/7656eeae-e87c-4b4d-8e74-4e856776b323"
    },
    {
      id: 4,
      name: "Java Developer",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/WP98HIS8.pdf"
    },
    {
      id: 5,
      name: "Linux Fundamentals",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/PIDWJ4SI.pdf"
    },
    {
      id: 6,
      name: "Servidor de Arquivos com Linux",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/LJ6NQZQQ.pdf"
    },
    {
      id: 7,
      name: "Servidor Web com Linux",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/MCK29RRW.pdf"
    },
    {
      id: 8,
      name: "Servidor de Banco de Dados com Linux",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/ZOKY9YLQ.pdf"
    },
    {
      id: 9,
      name: "Infra. como Código, Estrutura de Usuários",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/SJ8YNNCM.pdf"
    },
    {
      id: 10,
      name: "Infra. como Código, Servidor Web (Apache2)",
      issuer: "DIO",
      link: "https://hermes.dio.me/certificates/78EDRCZI.pdf"
    }
  ];

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
            Meu nome é Ian Cunha, sou desenvolvedor e moro em Recife.
            Tenho uma grande paixão por usar a tecnologia para gerar impacto e, em 2024,
            tive a honra de ser finalista do Prêmio Innovare pelo meu trabalho.
            Além da minha atuação profissional, dedico meu tempo como programador voluntário
            em uma organização não governamental. No momento, meu principal objetivo é construir
            minha estabilidade financeira para, assim, realizar meu sonho de conhecer o mundo.
            Nas horas vagas, gosto de treinar, ouvir música e jogar um pouco.
          </About>
        </Section>

        <ProjectsSection
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <ProjectsTitle>PROJETOS</ProjectsTitle>
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver projeto →
                  </ProjectLink>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
          <MoreProjectsButton
            href="https://www.linkedin.com/in/iancunha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais projetos
          </MoreProjectsButton>
        </ProjectsSection>

        <AwardsSection
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <AwardsTitle>PREMIAÇÕES</AwardsTitle>
          <AwardsGrid>
            {awards.map((award) => (
              <AwardCard key={award.id}>
                <AwardImage src={award.image} alt={award.title} />
                <AwardContent>
                  <AwardTitle>{award.title}</AwardTitle>
                  <AwardDescription>{award.description}</AwardDescription>
                  <AwardDate>{award.date}</AwardDate>
                </AwardContent>
              </AwardCard>
            ))}
          </AwardsGrid>
        </AwardsSection>

        <CertificationsSection
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <CertificationsTitle>CERTIFICAÇÕES</CertificationsTitle>
          <CertificationsList>
            {certifications.map((cert) => (
              <CertificationItem key={cert.id}>
                <CertificationIcon>
                  <CertIconImg src={certificateIcon} alt="Certificado" />
                </CertificationIcon>
                <CertificationInfo>
                  <CertificationName>{cert.name}</CertificationName>
                  <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                </CertificationInfo>
                <CertificationLink href={cert.link} target="_blank" rel="noopener noreferrer">
                  →
                </CertificationLink>
              </CertificationItem>
            ))}
          </CertificationsList>
          <MoreProjectsButton
            href="https://www.linkedin.com/in/iancunha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais certificações
          </MoreProjectsButton>
        </CertificationsSection>

        <SkillsSection
          as={motion.div}
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
              <SkillImg alt="Linux" src={linux} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="TypeScript" src={typescript} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="SQL" src={sql} />
            </SkillItem>
            <SkillItem>
              <SkillImg alt="Java" src={java} />
            </SkillItem>
          </SkillsContainer>
        </SkillsSection>

        <ExpSection
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <ExpTitle>EXPERIÊNCIAS</ExpTitle>
          <ExpList>
            <ExpItem>
              <ExpDetails>
                <JobTitle>Desenvolvedor Full Stack</JobTitle>
                <JobCompany>Real Estate AI Planner</JobCompany>
                <JobDate>mai de 2024 - o momento</JobDate>
                <JobDesc>
                  Desenvolvedor focado na criação de soluções digitais inovadoras.
                  Desenvolvendo sites modelos integrados com API do sistema da empresa, landing pages e aplicativo mobile.
                  Tecnologias usadas React Native, NextJS, ReactJS, TypeScript e outros.
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
          </ExpList>
        </ExpSection>

        <LanguagesSection
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <LanguagesTitle>IDIOMAS</LanguagesTitle>
          <LanguagesList>
            <LanguageItem data-tooltip="Nativo">
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
          as={motion.div}
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