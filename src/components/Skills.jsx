const skillGroups = [
    {
        icon: 'fas fa-laptop-code',
        title: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'React Native', 'Bootstrap', 'jQuery'],
    },
    {
        icon: 'fas fa-server',
        title: 'Backend',
        skills: ['Node.js', 'Django', 'Django REST Framework', 'Express.js'],
    },
    {
        icon: 'fas fa-database',
        title: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'SQL'],
    },
    {
        icon: 'fas fa-brain',
        title: 'AI & Data',
        skills: ['Tesseract OCR', 'Pillow', 'Evaluation Design'],
    },
    {
        icon: 'fas fa-screwdriver-wrench',
        title: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'pytest', 'Vitest', 'Render', 'Vercel'],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="skills section"
            aria-label="Skills Section"
        >
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-container">
                    {skillGroups.map((group, index) => (
                        <article
                            className="skill-card glare-hover"
                            key={group.title}
                            aria-labelledby={`skill-title-${index}`}
                        >
                            <div className="skill-icon" aria-hidden="true">
                                <i className={group.icon}></i>
                            </div>

                            <h3
                                className="skill-title"
                                id={`skill-title-${index}`}
                            >
                                {group.title}
                            </h3>

                            <ul className="tag-list" aria-label={`${group.title} skills`}>
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
