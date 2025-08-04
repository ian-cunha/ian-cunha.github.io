import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Projects.styles';
import fenixConnectImg from '../../assets/projects/fenixconnect.png';
import suapeVisionImg from '../../assets/projects/suapevision.png';
import tamassaImg from '../../assets/projects/tamassa.png';

const projectsData = [
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

const Projects: React.FC = () => (
    <S.ProjectsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.ProjectsTitle>PROJETOS</S.ProjectsTitle>
        <S.ProjectsGrid>
            {projectsData.map((project) => (
                <S.ProjectCard key={project.id}>
                    <S.ProjectImage src={project.image} alt={project.title} />
                    <S.ProjectContent>
                        <S.ProjectTitle>{project.title}</S.ProjectTitle>
                        <S.ProjectDescription>{project.description}</S.ProjectDescription>
                        <S.ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                            Ver projeto →
                        </S.ProjectLink>
                    </S.ProjectContent>
                </S.ProjectCard>
            ))}
        </S.ProjectsGrid>
        <S.MoreProjectsButton
            href="https://www.linkedin.com/in/iancunha/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ver mais projetos
        </S.MoreProjectsButton>
    </S.ProjectsSection>
);

export default Projects;