import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Languages.styles';
import portugueseIcon from '../../assets/portuguese.svg';
import englishIcon from '../../assets/english.svg';
import spanishIcon from '../../assets/spanish.svg';

const Languages: React.FC = () => (
    <S.LanguagesSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <S.LanguagesTitle>IDIOMAS</S.LanguagesTitle>
        <S.LanguagesList>
            <S.LanguageItem data-tooltip="Nativo">
                <img alt="Português" src={portugueseIcon} />
            </S.LanguageItem>
            <S.LanguageItem data-tooltip="Intermediário">
                <img alt="Inglês" src={englishIcon} />
            </S.LanguageItem>
            <S.LanguageItem data-tooltip="Iniciante">
                <img alt="Espanhol" src={spanishIcon} />
            </S.LanguageItem>
        </S.LanguagesList>
    </S.LanguagesSection>
);

export default Languages;