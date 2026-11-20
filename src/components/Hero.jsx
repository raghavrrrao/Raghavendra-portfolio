import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import { clientProjects } from '../data/projectsData';

const techHighlights = ['React', 'JavaScript', 'Python', 'Node.js', 'SQL'];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % clientProjects.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // The showcase card needs a screenshot, so it rotates through projects that have one
    const currentProject = clientProjects[currentIndex];

    return (
        <section id="hero" className="hero">
            <div className="container">
                
                {/* LEFT SIDE - HERO TEXT */}
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Raghavendra Rao</h1>
                    <h2 className="hero-role" id="myFocusText">Software Developer &amp; Full Stack Engineer</h2>
                    <p className="hero-description">
                        Building web applications, backend systems and practical software solutions.
                    </p>

                    <ul className="tag-list hero-tech" aria-label="Technology highlights">
                        {techHighlights.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>

                    <div className="hero-socials">
                        <a
                            href="mailto:raoraghav28@gmail.com"
                            className="social-icon"
                            aria-label="Email Raghavendra Rao"
                        >
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn profile of Raghavendra Rao"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a
                            href="https://github.com/raghavrrrao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="GitHub profile of Raghavendra Rao"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="hero-cta">
                        <a href="#contact" className="btn1">Contact Me</a>
                    </div>
                </div>

                {/* RIGHT SIDE - PROJECT SHOWCASE */}
                <div className="project-showcase">
                    <div className="showcase-item project-card">
                        <div className="project-image">
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                            />
                        </div>

                        <div className="project-content">
                            <h3>{currentProject.title}</h3>
                            <div className="project-role">
                                {currentProject.role}
                            </div>

                            <p>{currentProject.description}</p>

                            {currentProject.note && (
                                <b>{currentProject.note}</b>
                            )}

                            <div className="project-links">
                                <a
                                    href={currentProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
