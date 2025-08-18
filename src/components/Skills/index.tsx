import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Skills.styles';

import reactnative from '../../assets/react-native.svg';
import linux from '../../assets/linux.svg';
import docker from '../../assets/docker.svg';
import typescript from '../../assets/typescript.svg';
import kubernetes from '../../assets/kubernetes.svg';
import next from '../../assets/next.svg';

const Skills: React.FC = () => (
    <S.SkillsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <S.SkillsTitle>PRINCIPAIS HABILIDADES</S.SkillsTitle>
        <S.SkillsContainer>
            <S.SkillItem>
                <S.SkillImg alt="React JS/Native" src={reactnative} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="TypeScript" src={typescript} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="NextJS" src={next} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="Linux" src={linux} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="Docker" src={docker} />
            </S.SkillItem>
            <S.SkillItem>
                <S.SkillImg alt="Kubernetes" src={kubernetes} />
            </S.SkillItem>
        </S.SkillsContainer>
    </S.SkillsSection>
);

export default Skills;