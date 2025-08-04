import React from 'react';
import * as S from './About.styles';

const About: React.FC = () => (
    <S.About
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
    </S.About>
);

export default About;