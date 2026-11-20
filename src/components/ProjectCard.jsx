function toId(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function ProjectCard({ project }) {
    const titleId = `project-title-${toId(project.title)}`;
    const paragraphs = project.description.split('\n\n');

    return (
        <article className="project-card" aria-labelledby={titleId}>
            {project.image && (
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                />
            )}

            <div className="project-content">
                <h3 id={titleId}>{project.title}</h3>

                {project.category && <div className="project-role">{project.category}</div>}
                {project.role && <div className="project-role">{project.role}</div>}

                {paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                ))}

                {project.highlights?.length > 0 && (
                    <ul className="project-highlights">
                        {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}

                {project.technologies?.length > 0 && (
                    <ul className="tag-list" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                )}

                {project.note && <b className="project-note">{project.note}</b>}

                {project.link && (
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
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
