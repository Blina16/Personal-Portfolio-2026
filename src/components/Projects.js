import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, payment processing, and admin dashboard.",
      image: "/assets/ecommerce.jpg",
      icon: "",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["User Authentication", "Shopping Cart", "Payment Integration", "Admin Panel"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      status: "completed",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/assets/taskmanager.jpg",
      icon: "",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      features: ["Real-time Sync", "Drag & Drop", "Team Collaboration", "Progress Tracking"],
      github: "https://github.com/username/task-manager",
      demo: "https://taskmanager-demo.com",
      status: "completed",
      category: "Web App"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
      image: "/assets/weather.jpg",
      icon: "",
      technologies: ["JavaScript", "Weather API", "Chart.js", "Geolocation"],
      features: ["Location Search", "7-Day Forecast", "Interactive Maps", "Weather Alerts"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-demo.com",
      status: "completed",
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, reporting tools, and performance insights.",
      image: "/assets/analytics.jpg",
      icon: "",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      features: ["Data Visualization", "Report Generation", "API Integration", "Real-time Analytics"],
      github: "https://github.com/username/social-analytics",
      demo: "https://analytics-demo.com",
      status: "in-progress",
      category: "Analytics"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction management, and financial planning tools.",
      image: "/assets/banking.jpg",
      icon: "",
      technologies: ["React Native", "Node.js", "JWT", "Stripe"],
      features: ["Biometric Login", "Transaction History", "Budget Planning", "Push Notifications"],
      github: "https://github.com/username/mobile-banking",
      demo: "https://banking-demo.com",
      status: "completed",
      category: "Mobile"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "An AI-powered content generation platform with multiple text models, templates, and customization options.",
      image: "/assets/ai-generator.jpg",
      icon: "",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      features: ["Multiple AI Models", "Template Library", "Custom Prompts", "Export Options"],
      github: "https://github.com/username/ai-generator",
      demo: "https://ai-content-demo.com",
      status: "in-progress",
      category: "AI/ML"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <div className="projects-header">
          <span className="tag">My Work</span>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            Explore my recent work and see how I've helped businesses and individuals 
            achieve their goals through innovative solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-icon" style={{ display: 'none' }}>
                  {project.icon}
                </div>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status}`}>
                    {project.status === 'completed' ? ' Completed' : ' In Progress'}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-buttons">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                    <span></span> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    <span></span> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;