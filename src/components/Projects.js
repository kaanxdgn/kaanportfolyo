import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const textartImage = '/images/textart-icon.png';
const fitnessImage = '/images/fitness-icons.png';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: var(--background);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  background: var(--text-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  padding: 20px;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  background: var(--background-darker);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--secondary);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--accent);
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  color: var(--text);
  line-height: 1.6;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const Tag = styled.span`
  padding: 5px 15px;
  background: var(--accent);
  color: var(--background);
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Projects = () => {
  const projects = [
    {
      title: "Fitness Tracker",
      description: "Fitness ve sağlık takip uygulaması",
      tags: ["Python", "Qt Designer", "PyQt5"],
      image: fitnessImage
    },
    {
      title: "TextArt",
      description: "Metin düzenleme ve sanat uygulaması",
      tags: ["Python", "Qt Designer", "PyQt5", "PySide6"],
      image: textartImage
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projeler</Title>
        <ProjectGrid>
          {/* İlk iki proje - Dönen kartlar */}
          {projects.slice(0, 2).map((project, index) => (
            <FlipCard key={index}>
              <CardInner className="card-inner">
                <CardFront>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TagContainer>
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </CardFront>
                <CardBack>
                  <img 
                    src={process.env.PUBLIC_URL + project.image} 
                    alt={project.title}
                    onError={(e) => {
                      console.error(`Error loading image for ${project.title}: ${e.target.src}`);
                      e.target.onerror = null;
                      e.target.src = process.env.PUBLIC_URL + '/images/placeholder.png';
                    }}
                  />
                </CardBack>
              </CardInner>
            </FlipCard>
          ))}

          {/* Diğer projeler */}
          {projects.slice(2).map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagContainer>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagContainer>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 