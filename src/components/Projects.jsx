import { softwareProjects, clientProjects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

// Mobile projects list (desktop uses the grid + 3D menu in App.js)
function Projects() {
    return (
        <section id="projects" className="project-container" aria-label="Projects Section">
            <h2 className="section-title">My Projects</h2>

            <h3 className="projects-subtitle">Software Projects</h3>
            <div className="projects-list">
                {softwareProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <h3 className="projects-subtitle">Client Websites</h3>
            <div className="projects-list">
                {clientProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
