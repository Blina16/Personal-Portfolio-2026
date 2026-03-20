import React, { useState, useEffect } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const titles = [
    'Frontend Developer',
    'UI/UX Designer', 
    'React Specialist',
    'Creative Coder'
  ];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <h2 className="greeting-text">Hello, I'm</h2>
            <h1 className="hero-name">
              Blina <span className="wave">👋</span>
            </h1>
          </div>
          
          <div className="hero-title">
            <span className="static-text">I'm a </span>
            <span className="dynamic-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          
          <div className="hero-description">
            <p>
              Passionate about creating beautiful, functional web experiences that 
              delight users and solve real-world problems. Specializing in modern 
              React applications with a keen eye for design and user experience.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <span className="btn-icon">🚀</span>
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span className="btn-icon">💬</span>
              Get In Touch
            </button>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐙</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>💼</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐦</span>
            </a>
            <a href="mailto:hello@yourportfolio.com" className="social-link">
              <span>📧</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image">
            <div className="floating-elements">
              <div className="float-element element-1">💎</div>
              <div className="float-element element-2">⚡</div>
              <div className="float-element element-3">🎨</div>
              <div className="float-element element-4">🚀</div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <span>⌄</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;