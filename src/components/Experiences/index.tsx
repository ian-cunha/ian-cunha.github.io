import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Experiences.styles';

const Experiences: React.FC = () => (
    <S.ExpSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.ExpTitle>EXPERIÊNCIAS</S.ExpTitle>
        <S.ExpList>
            <S.ExpItem>
                <S.ExpDetails>
                    <S.JobTitle>Desenvolvedor FullStack</S.JobTitle>
                    <S.JobCompany>Real Estate AI Planner</S.JobCompany>
                    <S.JobDate>mai de 2024 - o momento</S.JobDate>
                    <S.JobDesc>
                        Desenvolvedor focado na criação de soluções digitais, com sólida experiência em TypeScript, React.js, Next.js, React Native, Expo Go, Vercel entre outras. Responsável por todo o ciclo de vida do desenvolvimento, incluindo testes, build, deploy e práticas de DevOps, para entregar aplicações web e mobile de alta performance.
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