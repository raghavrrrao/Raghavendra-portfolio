import React from 'react';

function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-html5"></i></div>
                        <h3 className="skill-title">HTML / HTML5</h3>
                        <p>Advanced proficiency in semantic HTML markup and structural web development.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="90"></div>
                        </div>
                    </div>

                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
                        <h3 className="skill-title">CSS / CSS3</h3>
                        <p>Strong styling capabilities including flexbox, grid layouts, and animations.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="85"></div>
                        </div>
                    </div>

                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-bootstrap"></i></div>
                        <h3 className="skill-title">Bootstrap</h3>
                        <p>Expert in Bootstrap framework including grid layouts and responsive components.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="88"></div>
                        </div>
                    </div>

                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-js"></i></div>
                        <h3 className="skill-title">JavaScript / ES6</h3>
                        <p>Proficient in modern JavaScript including map, filter, reduce methods and more.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="80"></div>
                        </div>
                    </div>

                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-jquery"></i></div>
                        <h3 className="skill-title">jQuery</h3>
                        <p>Experience with jQuery for DOM manipulation and animation effects.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="75"></div>
                        </div>
                    </div>

                    <div className="skill-card glare-hover">
                        <div className="skill-icon"><i className="fab fa-node-js"></i></div>
                        <h3 className="skill-title">Node.js</h3>
                        <p>Basic knowledge of Node.js framework for web application development.</p>
                        <div className="skill-level">
                            <div className="skill-progress" data-level="50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
