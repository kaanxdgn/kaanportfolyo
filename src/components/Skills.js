import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  background: var(--background);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  background: var(--text-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--accent);
  
  svg {
    filter: drop-shadow(0 0 10px var(--accent));
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`;

const SkillLevel = styled.p`
  font-size: 1rem;
  color: var(--accent);
  opacity: 0.8;
  line-height: 1.6;
  font-weight: 500;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <TbBrandCSharp />,
      title: "C#",
      level: "Temel Seviye"
    },
    {
      icon: <FaPython />,
      title: "Python",
      level: "Temel Seviye"
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      level: "Temel Seviye"
    },
    {
      icon: <FaReact />,
      title: "React",
      level: "Temel Seviye"
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: "Temel Seviye"
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: "Temel Seviye"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 9,
        mass: 0.9
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Title>Neler Yapabilirim</Title>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkillsGrid>
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                variants={cardVariants}
                custom={index}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 