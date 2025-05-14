import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--secondary);
  padding: 100px 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 2rem;
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    margin-bottom: 1.5rem;
    opacity: 0.9;
    line-height: 1.8;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--accent);
    border-radius: 20px;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      var(--accent) 0%,
      transparent 100%
    );
    opacity: 0.1;
    border-radius: 20px;
    z-index: 2;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 3;
  filter: grayscale(20%);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ben Kimim?</h2>
            <p>
              Merhaba! Ben Kaan Doğan.Kendimi bildim bileli bilgisayar ve teknolojik cihazların içerisindeyim.
            </p>
            <p>
             Temel düzeyde c#,python,JavaScript,HTML,CSS,React biliyorum.Genellikle macOS ve iOS ortamlarında çalışıyorum.
            </p>
            <p>
              Bunların dışında matematik, geometri, resim çizmeyi ve bazı sporlar ile ilgilenmeyi ihmal etmiyorum.
            </p>
          </motion.div>
        </AboutContent>
        <ProfileImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProfileImage 
            src="/images/profile/profile-photo.jpg" 
            alt="Profile"
            whileHover={{ scale: 1.02 }}
          />
        </ProfileImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 