import React from "react";

function Skills() {
  const skills = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "Creating intuitive user interfaces with modern design principles",
      icon: "",
      level: 90,
      technologies: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      id: 2,
      title: "Frontend Development",
      desc: "Building responsive and interactive web applications",
      icon: "",
      level: 85,
      technologies: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      id: 3,
      title: "UX Research",
      desc: "Conducting user research and usability testing",
      icon: "",
      level: 80,
      technologies: ["User Testing", "Wireframing", "Prototyping"]
    },
    {
      id: 4,
      title: "Backend Development",
      desc: "Developing server-side applications and APIs",
      icon: "",
      level: 75,
      technologies: ["Node.js", "Python", "Database"]
    },
    {
      id: 5,
      title: "Mobile Design",
      desc: "Designing for iOS and Android platforms",
      icon: "",
      level: 70,
      technologies: ["React Native", "Flutter", "iOS/Android"]
    },
    {
      id: 6,
      title: "Version Control",
      desc: "Managing code with Git and collaborative workflows",
      icon: "",
      level: 88,
      technologies: ["Git", "GitHub", "GitLab"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        
        {/* LEFT SIDE */}
        <div className="skills-left">
          <span className="tag">My Skills</span>

          <h2>
            Why Hire Me For Your <span>Next Project?</span>
          </h2>

          <p>
            I'm specialized in UI/UX Design. My passion is designing &
            solving problems through user experience and research.
          </p>

          <button className="hire-btn">Hire Me</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.desc}</p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-tech">
                {skill.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;