import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Skills.styles';
import reactnative from '../../assets/react-native.svg';
import linux from '../../assets/linux.svg';
import typescript from '../../assets/typescript.svg';
import sql from '../../assets/sql.svg';
import java from '../../assets/java.svg';

const Skills: React.FC = () => (
    <S.SkillsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <S.SkillsTitle>PRINCIPAIS HABILIDADES</S.SkillsTitle>
        <S.SkillsContainer>
            <S.SkillItem>
                <S.SkillImg alt="React Native" src={reactnative} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="Linux" src={linux} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="TypeScript" src={typescript} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="SQL" src={sql} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="Java" src={java} />
            </S.SkillItem>
        </S.SkillsContainer>
    </S.SkillsSection>
);

export default Skills;