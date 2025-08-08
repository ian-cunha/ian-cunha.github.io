import React from 'react';
import * as S from './About.styles';

const About: React.FC = () => (
    <S.About
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
    >
        Sou desenvolvedor apaixonado por transformar ideias em soluções tecnológicas de impacto. Em 2024, tive a honra de ser finalista do Prêmio Innovare pelo meu trabalho inovador, reconhecimento que reforçou minha missão de usar a tecnologia como ferramenta de transformação social e profissional.
        Além da minha atuação no mercado, atuo como programador voluntário em uma ONG, contribuindo para causas que geram impacto real na vida das pessoas.
        <br /><br />
        Atualmente, meu foco é consolidar minha estabilidade financeira e estruturar minha carreira para realizar um grande sonho: conhecer o mundo.
        Fora do código, gosto de treinar, ouvir música e aproveitar momentos de descontração jogando.
    </S.About>
);

export default About;