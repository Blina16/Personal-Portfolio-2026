import React from 'react';

function About() {
  const timeline = [
    {
      year: '2021 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.'
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications using React and modern JavaScript, collaborated with UX teams to implement pixel-perfect designs.'
    },
    {
      year: '2018 - 2019',
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      description: 'Started my professional journey building websites and learning modern web technologies, contributed to various client projects.'
    }
  ];

  const interests = [
    { icon: '🎨', name: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces' },
    { icon: '🚀', name: 'Performance', description: 'Optimizing web applications for speed and efficiency' },
    { icon: '📚', name: 'Learning', description: 'Continuously exploring new technologies and frameworks' },
    { icon: '🎯', name: 'Problem Solving', description: 'Finding creative solutions to complex challenges' },
    { icon: '🌍', name: 'Open Source', description: 'Contributing to community projects and knowledge sharing' },
    { icon: '☕', name: 'Coffee', description: 'Fueling creativity and late-night coding sessions' }
  ];

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'CSS/Sass', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'UI/UX Design', level: 80, category: 'Design' }
  ];
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="tag">About Me</span>
          <h2>
            Get To Know <span>Me Better</span>
          </h2>
          <p>
            Passionate frontend developer with a love for creating beautiful, 
            functional web experiences that make a difference.
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-story">
              <h3>My Journey</h3>
              <p>
                Hi! I'm Blina, a passionate Frontend Developer with over 3 years of experience 
                building modern, responsive web applications. My journey in web development 
                began with a curiosity about how websites work and evolved into a career 
                focused on creating exceptional user experiences.
              </p>
              <p>
                I specialize in React ecosystem and modern JavaScript, but I'm always 
                eager to learn new technologies and take on challenging projects. I believe 
                in writing clean, maintainable code and creating interfaces that are both 
                beautiful and functional.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest web technologies.
              </p>
            </div>

            <div className="about-skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="about-timeline">
              <h3>Experience Timeline</h3>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{item.year}</div>
                      <h4>{item.title}</h4>
                      <h5>{item.company}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-interests">
              <h3>Interests & Passions</h3>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">{interest.icon}</span>
                    <div className="interest-details">
                      <h4>{interest.name}</h4>
                      <p>{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <button 
            className="cta-btn"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>💬</span> Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;