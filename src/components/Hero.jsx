import React from 'react';
import '../styles/main.css';

function Hero() {
    return (
        <section id="hero" className="hero" role="region" aria-label="Introduction Section">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-greeting" aria-label="Greeting text">Hello, I'm</p>

                    <h1 className="hero-name" aria-label="Name: Raghav">Raghav</h1>

                    <h2
                        className="hero-role"
                        id="myFocusText"
                        aria-label="Role: Web Developer"
                    >
                        Web Developer
                    </h2>

                    <p className="hero-description" aria-label="Short bio">
                        Self-learner with a passion for web technologies. Experienced in designing,
                        developing, and maintaining web applications, responsive pages, and email templates.
                    </p>

                    <div className="hero-socials" aria-label="Social links">
                        <a
                            href="mailto:raoraghav28@gmail.com"
                            className="social-icon"
                            aria-label="Send email to raoraghav28@gmail.com"
                        >
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="Visit LinkedIn profile"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="hero-cta">
                        <a
                            href="#contact"
                            className="btn1"
                            aria-label="Go to contact section"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
