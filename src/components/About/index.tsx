import React from 'react';
import * as S from './About.styles';

const About: React.FC = () => (
    <S.About
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
    >
        Como desenvolvedor, busco criar tecnologia com impacto social, um compromisso que me rendeu a indicação como finalista do Prêmio Innovare em 2024. Meu trabalho é pautado pela mentalidade DevOps, focando na entrega de soluções eficientes e de alta qualidade, dedicação que aplico também como voluntário em uma ONG. Hoje, meu objetivo é construir uma carreira sólida que me permita viajar o mundo. Nas horas vagas, gosto de treinar, ouvir música ou aprender algo novo.
    </S.About>
);

export default About;