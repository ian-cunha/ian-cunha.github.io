import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Links.styles';
import whatsappIcon from '../../assets/whatsapp.svg';
import instagramIcon from '../../assets/instagram.svg';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import xIcon from '../../assets/x.svg';

const Links: React.FC = () => (
    <S.LinksSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }}>
        <S.LinksTitle>LINKS</S.LinksTitle>
        <S.LinksList>
            <S.LinkItem>
                <img alt="WhatsApp" src={whatsappIcon} width={20} height={20} />
                <a href="https://wa.me/5581994640585" target="_blank" rel="noopener noreferrer">
                    (81) 99464-0585
                </a>
            </S.LinkItem>
            <S.LinkItem>
                <img alt="Instagram" src={instagramIcon} width={20} height={20} />
                <a href="https://www.instagram.com/ian.pictures/" target="_blank" rel="noopener noreferrer">
                    @ian.pictures
                </a>
            </S.LinkItem>
            <S.LinkItem>
                <img alt="GitHub" src={githubIcon} width={20} height={20} />
                <a href="https://github.com/ian-cunha" target="_blank" rel="noopener noreferrer">
                    @ian-cunha
                </a>
            </S.LinkItem>
            <S.LinkItem>
                <img alt="LinkedIn" src={linkedinIcon} width={20} height={20} />
                <a href="https://www.linkedin.com/in/iancunha/" target="_blank" rel="noopener noreferrer">
                    Ian Cunha
                </a>
            </S.LinkItem>
            <S.LinkItem>
                <img alt="X" src={xIcon} width={20} height={20} />
                <a href="https://x.com/inatus0x" target="_blank" rel="noopener noreferrer">
                    @inatus0x
                </a>
            </S.LinkItem>
        </S.LinksList>
    </S.LinksSection>
);

export default Links;