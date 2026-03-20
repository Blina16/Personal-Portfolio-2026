import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "hero", label: "Home", icon: "🏠" },
    { href: "about", label: "About", icon: "👤" },
    { href: "skills", label: "Skills", icon: "💡" },
    { href: "projects", label: "Projects", icon: "🚀" },
    { href: "contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")} className="logo">
            <span className="logo-icon">💎</span>
            <span className="logo-text">Blina.dev</span>
          </a>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`nav-link ${activeSection === link.href ? "active" : ""}`}
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="hire-me-btn"
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            <span>💼</span> Hire Me
          </button>
          
          <div 
            className={`menu-btn ${menuOpen ? "active" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;