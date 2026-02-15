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
                    {[
                        {
                            icon: 'fab fa-html5',
                            title: 'HTML / HTML5',
                            desc: 'Advanced proficiency in semantic HTML markup and structural web development.',
                            level: 90,
                        },
                        {
                            icon: 'fab fa-css3-alt',
                            title: 'CSS / CSS3',
                            desc: 'Strong styling capabilities including flexbox, grid layouts, and animations.',
                            level: 85,
                        },
                        {
                            icon: 'fab fa-bootstrap',
                            title: 'Bootstrap',
                            desc: 'Expert in Bootstrap framework including grid layouts and responsive components.',
                            level: 88,
                        },
                        {
                            icon: 'fab fa-js',
                            title: 'JavaScript / ES6',
                            desc: 'Proficient in modern JavaScript including map, filter, reduce methods and more.',
                            level: 80,
                        },
                        {
                            icon: 'fab fa-jquery',
                            title: 'jQuery',
                            desc: 'Experience with jQuery for DOM manipulation and animation effects.',
                            level: 75,
                        },
                        {
                            icon: 'fab fa-node-js',
                            title: 'Node.js',
                            desc: 'Basic knowledge of Node.js framework for web application development.',
                            level: 50,
                        },
                    ].map((skill, index) => (
                        <article
                            className="skill-card glare-hover"
                            key={index}
                            aria-labelledby={`skill-title-${index}`}
                        >
                            <div className="skill-icon" aria-hidden="true">
                                <i className={skill.icon}></i>
                            </div>

                            <h3
                                className="skill-title"
                                id={`skill-title-${index}`}
                            >
                                {skill.title}
                            </h3>

                            <p>{skill.desc}</p>

                            <div
                                className="skill-level"
                                role="progressbar"
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-label={`Proficiency level in ${skill.title}: ${skill.level}%`}
                            >
                                <div
                                    className="skill-progress"
                                    data-level={skill.level}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
