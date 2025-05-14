import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #0a0612;
    --background-darker: #060309;
    --text: #ffffff;
    --text-gradient-primary: linear-gradient(120deg, #e0e0e0, #ffffff);
    --text-gradient-accent: linear-gradient(120deg, var(--accent), var(--accent-secondary));
    --accent: #00ffd5;
    --accent-secondary: #7000ff;
    --secondary: #0c0814;
    --highlight: rgba(112, 0, 255, 0.15);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--background-darker);
  }

  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--background) 0%, var(--background-darker) 100%);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
    pointer-events: none;
    background: 
      linear-gradient(
        45deg,
        var(--highlight) 0%,
        transparent 100%
      ),
      radial-gradient(
        circle at 50% 30%,
        var(--highlight) 0%,
        transparent 70%
      );
    opacity: 0.5;
    z-index: -1;
  }

  #home h1, #home h2, #home p {
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  #home .highlight {
    background: var(--text-gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .name-title {
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
    mix-blend-mode: difference;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .name-title.scrolled {
    font-size: 2.5rem;
    top: 2rem;
    left: 2rem;
    transform: translate(0, 0);
    mix-blend-mode: normal;
    background: var(--text-gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    .name-title {
      font-size: 3.5rem;
    }
    
    .name-title.scrolled {
      font-size: 2rem;
      top: 1.5rem;
      left: 1.5rem;
    }
  }

  .scroll-effect {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-effect.scrolled {
    opacity: 0.9;
    transform: translateY(-20px) scale(0.95);
    background: var(--text-gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
  }

  @keyframes fadeScale {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    50% {
      opacity: 0.8;
      transform: scale(0.95) translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .name-animation {
    animation: fadeScale 2s infinite;
    animation-play-state: paused;
  }

  .name-animation.animate {
    animation-play-state: running;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  a:hover {
    background: var(--text-gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: linear-gradient(45deg, var(--accent), var(--accent-secondary));
    color: var(--text);
    transition: all 0.3s ease;
    padding: 12px 24px;
    border-radius: 6px;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(112, 0, 255, 0.3);
  }

  .section {
    padding: 100px 0;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    background-color: var(--background);
  }

  .section:nth-child(odd) {
    background-color: var(--background-darker);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  .gradient-text {
    background: linear-gradient(120deg, var(--text) 0%, #e0e0e0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(5deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    75% {
      transform: translateY(20px) rotate(-5deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }

  ::selection {
    background: var(--accent-secondary);
    color: var(--text);
  }
`;

export default GlobalStyles; 