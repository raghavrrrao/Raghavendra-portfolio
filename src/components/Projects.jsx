import React from 'react';
import projectsData from '../data/projectsData'; // Adjust the path if needed

function Projects() {
    return (
        <section id="projects" className="project-container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div class="project-links">
                                <a href={project.link} target="_blank" class="project-link">
                                    <i class="fas fa-external-link-alt"></i>
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
