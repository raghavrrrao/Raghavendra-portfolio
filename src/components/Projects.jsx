import projectsData from '../data/projectsData'; // Adjust the path if needed

function Projects() {
    return (
        <section id="projects" className="project-container" aria-label="Projects Section">
            <h2 className="section-title">My Projects</h2>

            <div className="projects-list">
                {projectsData.map((project, idx) => (
                    <article className="project-card" key={idx} aria-labelledby={`project-title-${idx}`}>
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="project-image"
                        />

                        <div className="project-content">
                            <h3 id={`project-title-${idx}`}>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-links">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label={`Visit ${project.title} site`}
                                >
                                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
