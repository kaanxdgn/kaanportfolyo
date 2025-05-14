import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding: 0 20px;
`;

const GreetingText = styled(motion.span)`
  display: block;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--accent);
  margin-bottom: 10px;
  opacity: 0.9;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin-bottom: 20px;
  color: var(--accent);
  font-weight: 700;
`;

const Subtitle = styled(motion.div)`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: var(--text);
  margin-bottom: 40px;
  opacity: 0.9;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
  color: var(--text);
  opacity: 0.8;
  line-height: 1.6;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, 
      rgba(97, 218, 251, 0.1) 0%,
      rgba(97, 218, 251, 0.05) 50%,
      transparent 70%
    );
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, 
      rgba(97, 218, 251, 0.1) 0%,
      rgba(97, 218, 251, 0.05) 50%,
      transparent 70%
    );
    border-radius: 50%;
    bottom: -150px;
    left: -150px;
    animation: float 15s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(50px, 50px) rotate(120deg);
    }
    66% {
      transform: translate(-50px, 50px) rotate(240deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  
  a {
    color: var(--text);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const greetings = [
    "Merhaba",
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "こんにちは",
    "안녕하세요"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [greetings.length]);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-light');
    if (!cursor) return;

    const updateCursor = (e) => {
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      });
    };

    const handleMouseEnter = () => cursor.classList.add('active');
    const handleMouseLeave = () => cursor.classList.remove('active');

    window.addEventListener('mousemove', updateCursor);
    
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.6,
        delay: 0.4
      }
    }
  };

  return (
    <HeroSection id="home">
      <div className="cursor-light" />
      <BackgroundAnimation />
      <HeroContent>
        <AnimatePresence mode="wait">
          <GreetingText
            key={currentGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[currentGreeting]}
          </GreetingText>
        </AnimatePresence>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Ben Kaan Doğan
        </Title>
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Bilgisayar Mühendisliği 2. Sınıf Öğrencisi
        </Subtitle>
        <Description
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Yazılım ve uygulama geliştirmekten aynı zamanda matematik ve geometri ile ilgilenmekten keyif alıyorum.
        </Description>
        <SocialLinks>
          <motion.a
            href="https://github.com/kaanxdgn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 