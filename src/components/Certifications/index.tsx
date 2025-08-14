import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Certifications.styles';
import certificateIcon from '../../assets/certificate.svg';
import certificaUniversity from '../../assets/RVDD.pdf';

const certificationsData = [
    {
        id: 0,
        name: "Análise de desenvolvimento de Sistemas",
        issuer: "Estácio de Sá",
        link: certificaUniversity
    },
    {
        id: 1,
        name: "Formação Linux",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/PIDWJ4SI.pdf"
    },
    {
        id: 2,
        name: "Formação Docker",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/XTYSPC7L.pdf"
    },
    {
        id: 3,
        name: "ReactJS",
        issuer: "Alura",
        link: "https://cursos.alura.com.br/certificate/0d544f0d-713e-47b5-9195-fa1021cb8487"
    },
    {
        id: 4,
        name: "React Native",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/TZIYOE9I.pdf"
    },
    {
        id: 5,
        name: "Servidor de Arquivos com Linux",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/LJ6NQZQQ.pdf"
    },
    {
        id: 6,
        name: "Servidor Web com Linux",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/MCK29RRW.pdf"
    },
    {
        id: 7,
        name: "Servidor de Banco de Dados com Linux",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/ZOKY9YLQ.pdf"
    },
    {
        id: 8,
        name: "Infra. como Código, Estrutura de Usuários",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/SJ8YNNCM.pdf"
    },
    {
        id: 9,
        name: "Infra. como Código, Servidor Web (Apache2)",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/78EDRCZI.pdf"
    }
];

const Certifications: React.FC = () => (
    <S.CertificationsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.CertificationsTitle>CERTIFICAÇÕES</S.CertificationsTitle>
        <S.CertificationsList>
            {certificationsData.map((cert) => (
                <S.CertificationItem key={cert.id}>
                    <S.CertificationIcon>
                        <S.CertIconImg src={certificateIcon} alt="Certificado" />
                    </S.CertificationIcon>
                    <S.CertificationInfo>
                        <S.CertificationName>{cert.name}</S.CertificationName>
                        <S.CertificationIssuer>{cert.issuer}</S.CertificationIssuer>
                    </S.CertificationInfo>
                    <S.CertificationLink href={cert.link} target="_blank" rel="noopener noreferrer">
                        →
                    </S.CertificationLink>
                </S.CertificationItem>
            ))}
        </S.CertificationsList>
        <S.MoreProjectsButton
            href="https://www.linkedin.com/in/iancunha/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ver mais certificações
        </S.MoreProjectsButton>
    </S.CertificationsSection>
);

export default Certifications;