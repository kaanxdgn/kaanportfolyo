import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CollabMessage = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    color: var(--accent);
    font-weight: 700;
  }
  
  p {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--accent);
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    background: var(--background);
    border: 1px solid var(--accent);
    border-radius: 5px;
    color: var(--text);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--text);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--accent);
  color: var(--background);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background: #8A2BE2;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const SocialIconsGrid = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: var(--text);
  font-size: 1.6rem;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;

  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  
  .shape {
    position: absolute;
    border: 2px solid var(--accent);
    opacity: 0.1;
  }
  
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 20%;
    left: 10%;
  }
  
  .square {
    width: 80px;
    height: 80px;
    bottom: 20%;
    right: 10%;
    transform: rotate(45deg);
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    margin-bottom: 30px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }
`;

const EmailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: var(--accent);
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-secondary);
    transform: translateX(5px);
  }

  svg {
    font-size: 1.4rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada form gönderme işlemi simüle edilmiştir
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <ContactSection id="contact">
      <FloatingShapes>
        <div className="shape circle" />
        <div className="shape square" />
      </FloatingShapes>
      <ContactContainer>
        <CollabMessage
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Beraber Çalışalım</h2>
          <p>
            Yeni projeler yapmak ve beraber geliştirmek için her zaman heyecanlıyım.
          </p>
        </CollabMessage>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </SubmitButton>
        </ContactForm>
        <ContactContent>
          <ContactInfo>
            <h1>Bana Ulaşın</h1>
            <p>Projeleriniz için benimle iletişime geçebilirsiniz.</p>
            <EmailLink href="kaan.dogaann26@gmail.com">
              <MdEmail /> kaan.dogaann26@gmail.com
            </EmailLink>
          </ContactInfo>
          
          <SocialLinks>
            <h1>Sosyal Medya</h1>
            <SocialIconsGrid>
              <SocialIcon href="https://github.com/kaanxdgn" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
            </SocialIconsGrid>
          </SocialLinks>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 