import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Header.styles';
import verified from '../../assets/verified.svg';

const Header: React.FC = () => (
    <>
        <S.Header>
            <S.Title as={motion.h1} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                Ian Cunha
            </S.Title>
            <S.VerifiedImg alt="verified" src={verified} />
        </S.Header>
        <S.Location as={motion.span} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            Pernambuco, Brasil
        </S.Location>
    </>
);

export default Header;