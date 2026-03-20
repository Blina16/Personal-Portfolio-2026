import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@yourportfolio.com',
      link: 'mailto:hello@yourportfolio.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: '💼',
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: '🐙',
      name: 'GitHub',
      link: 'https://github.com/yourusername'
    },
    {
      icon: '🐦',
      name: 'Twitter',
      link: 'https://twitter.com/yourusername'
    },
    {
      icon: '🎨',
      name: 'Dribbble',
      link: 'https://dribbble.com/yourusername'
    }
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="tag">Get In Touch</span>
          <h2>
            Let's <span>Connect</span>
          </h2>
          <p>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="info-item">
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form">
              <h3>Send Message</h3>
              
              {formStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>
                      <span>📤</span> Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;