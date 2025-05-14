import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const PortfolioSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: var(--background);
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-align: center;
  color: var(--accent);
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background: var(--secondary);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(97, 218, 251, 0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-10px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px rgba(97, 218, 251, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(3, 3, 3, 0) 0%,
      rgba(3, 3, 3, 0.8) 100%
    );
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--accent);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: rgba(97, 218, 251, 0.1);
  color: var(--accent);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Portfolio = () => {
  const projects = [
    {
      title: 'Sporcu Kayıt Uygulaması',
      description: 'Merkezi Sporcu Kayıt Sistemi',
      image: './src/assets/fitness-icons.png',
      tech: ['Python', 'PyQt5', 'QtDesigner', 'PySide6','SQLite'],
      github: 'https://github.com/kaanxdgn/sporcukayituygulamasi',
    },
    {
      title: 'Kelime İşleme Uygulaması',
      description: 'Basit not alabileceğiniz bir uygulama',
      image: './src/assets/textart-icon.png',
      tech: ['Python', 'PyQt5', 'QtDesigner', 'PySide6'],
      github: 'https://github.com/kaanxdgn/Kelime_islemci',
    },
    {
      title: 'Soru Bankası Uygulaması',
      description: 'Soru ekleme silme ve yazdırabileceğiniz bir uygulama',
      image: '',
      tech: ['Python', 'PyQt5', 'QtDesigner', 'PySide6'],
      github: 'https://github.com/kaanxdgn/sorubankas-',
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.8
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.6,
        delay: i * 0.2
      }
    }),
    exit: (i) => ({
      x: 100,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.6,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.05,
      x: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projelerim
        </Title>
        <ProjectGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
            >
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    as={motion.a}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 