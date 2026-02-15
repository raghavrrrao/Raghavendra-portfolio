import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import projectsData from '../data/projectsData';

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % projectsData.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentProject = projectsData[currentIndex];

    return (
        <section id="hero" className="hero">
            <div className="container">
                
                {/* LEFT SIDE - HERO TEXT */}
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
