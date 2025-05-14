import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  background: ${props => props.scrolled ? 'var(--background)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--text-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text);
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  &:hover {
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    &:after {
      width: 100%;
      background: var(--text-gradient-primary);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  z-index: 99;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home" onClick={(e) => handleClick(e, 'home')}>KD.</Logo>
        <NavLinks>
          <NavLink href="#home" onClick={(e) => handleClick(e, 'home')}>Ana Sayfa</NavLink>
          <NavLink href="#about" onClick={(e) => handleClick(e, 'about')}>Hakkımda</NavLink>
          <NavLink href="#skills" onClick={(e) => handleClick(e, 'skills')}>Neler Yapabilirim</NavLink>
          <NavLink href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')}>Portfolyo</NavLink>
          <NavLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>İletişim</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
        <NavLink href="#home" onClick={(e) => handleClick(e, 'home')}>Ana Sayfa</NavLink>
        <NavLink href="#about" onClick={(e) => handleClick(e, 'about')}>Hakkımda</NavLink>
        <NavLink href="#skills" onClick={(e) => handleClick(e, 'skills')}>Neler Yapabilirim</NavLink>
        <NavLink href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')}>Portfolyo</NavLink>
        <NavLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>İletişim</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 