import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Awards.styles';
import kaririImg from '../../assets/awards/kariri.png';
import innovareImg from '../../assets/awards/innovare.png';
import suapeImg from '../../assets/awards/suapevisionpremio.png';

const awardsData = [
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

const Awards: React.FC = () => (
    <S.AwardsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.AwardsTitle>PREMIAÇÕES</S.AwardsTitle>
        <S.AwardsGrid>
            {awardsData.map((award) => (
                <S.AwardCard key={award.id}>
                    <S.AwardImage src={award.image} alt={award.title} />
                    <S.AwardContent>
                        <S.AwardTitle>{award.title}</S.AwardTitle>
                        <S.AwardDescription>{award.description}</S.AwardDescription>
                        <S.AwardDate>{award.date}</S.AwardDate>
                    </S.AwardContent>
                </S.AwardCard>
            ))}
        </S.AwardsGrid>
    </S.AwardsSection>
);

export default Awards;