import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Experiences.styles';

const Experiences: React.FC = () => (
    <S.ExpSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.ExpTitle>EXPERIÊNCIAS</S.ExpTitle>
        <S.ExpList>
            <S.ExpItem>
                <S.ExpDetails>
                    <S.JobTitle>Desenvolvedor Full Stack</S.JobTitle>
                    <S.JobCompany>Real Estate AI Planner</S.JobCompany>
                    <S.JobDate>mai de 2024 - o momento</S.JobDate>
                    <S.JobDesc>
                        Desenvolvedor focado na criação de soluções digitais inovadoras.
                        Desenvolvendo sites modelos integrados com API do sistema da empresa, landing pages e aplicativo mobile.
                        Tecnologias usadas React Native, NextJS, ReactJS, TypeScript e outros.
                    </S.JobDesc>
                </S.ExpDetails>
            </S.ExpItem>
            <S.ExpItem>
                <S.ExpDetails>
                    <S.JobTitle>Desenvolvedor Frontend</S.JobTitle>
                    <S.JobCompany>Marta Inteligência Imobiliária</S.JobCompany>
                    <S.JobDate>dez de 2021 - out de 2024</S.JobDate>
                    <S.JobDesc>
                        Desenvolvimento Web e UI/UX focado em landing pages imobiliárias, React,
                        JavaScript, Bootstrap, Axios e PHP para criar sites responsivos e funcionais.
                        Fazendo integrações, manutenção e colaborando com design e marketing.
                    </S.JobDesc>
                </S.ExpDetails>
            </S.ExpItem>
            <S.ExpItem>
                <S.ExpDetails>
                    <S.JobTitle>Estágiario</S.JobTitle>
                    <S.JobCompany>Marta Inteligência Imobiliária</S.JobCompany>
                    <S.JobDate>jan de 2021 - dez de 2021</S.JobDate>
                    <S.JobDesc>
                        Desenvolvimento Web e UI/UX focado em landing pages imobiliárias em
                        PHP/JavaScript. Fazendo integrações, manutenção e colaborando com
                        design e marketing.
                    </S.JobDesc>
                </S.ExpDetails>
            </S.ExpItem>
        </S.ExpList>
    </S.ExpSection>
);

export default Experiences;