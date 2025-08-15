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
        link: "https://cursos.alura.com.br/user/contatoiancunha/course/react-desenvolvendo-javascript/formalCertificate"
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