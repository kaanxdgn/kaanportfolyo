import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home">
      <h1 className={`name-title ${isScrolled ? 'scrolled' : ''}`}>
        Kaan Doğan
      </h1>
      <div className="container">
        {/* Diğer içerikler buraya gelecek */}
      </div>
    </section>
  );
};

export default Home; 