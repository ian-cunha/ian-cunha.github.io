import React from 'react';
import { motion } from 'framer-motion';
import * as S from './Certifications.styles';
import certificateIcon from '../../assets/certificate.svg';
import certificaUniversity from '../../assets/RVDD.pdf';

const certificationsData = [
    {
        id: 0,
        name: "Curso Superior em A.D.S.",
        issuer: "Faculdade Estácio de Sá",
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
        name: "Formação Kubernetes",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/NMF1PUXJ.pdf"
    },
    {
        id: 4,
        name: "React com JavaScript",
        issuer: "Alura",
        link: "https://cursos.alura.com.br/user/contatoiancunha/course/react-desenvolvendo-javascript/formalCertificate"
    },
    {
        id: 5,
        name: "Fundamentos .NET",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/B6GMLZJG.pdf"
    },
    {
        id: 6,
        name: "Fundamentos Java",
        issuer: "DIO",
        link: "https://hermes.dio.me/certificates/KRSMR2KN.pdf"
    },
    {
        id: 7,
        name: "SQL com MySQL",
        issuer: "DIO",
        link: "https://cursos.alura.com.br/user/contatoiancunha/course/mysql-manipule-dados-com-sql/formalCertificate"
    },
    {
        id: 8,
        name: "Full Stack com React",
        issuer: "DIO",
        link: "https://cursos.alura.com.br/user/contatoiancunha/course/react-crie-primeira-pagina-web/formalCertificate"
    }
];

const Certifications: React.FC = () => (
    <S.CertificationsSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <S.CertificationsTitle>FORMAÇÕES | CERTIFICAÇÕES</S.CertificationsTitle>
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