import React from 'react';
// Import your CSS file for styling (adjust the path as needed)
import '../styles/main.css'; // <-- Make sure this file exists and contains your styles

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Raghav</h1>
                    <h2 className="hero-role" id="myFocusText">Web Developer</h2>
                    <p className="hero-description">
                        Self-learner with a passion for web technologies. Experienced in designing,
                        developing, and maintaining web applications, responsive pages, and email templates.
                    </p>
                    <div className="hero-socials">
                        <a href="mailto:raoraghav28@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="hero-cta">
                        <a href="#contact" className="btn1">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
