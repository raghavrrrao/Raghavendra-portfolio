import React from 'react';

function About() {
    return (
        <section id="about" className="about section" aria-labelledby="about-title">
            <div className="container">
                <h2 className="section-title" id="about-title">About Me</h2>
                <div className="about-container">

                    {/* Profile Image */}
                    <div className="about-image">
                        <img
                            src="/images/raghav.jpg"
                            alt="Portrait of Raghavendra Rao"
                            className="about-img"
                            aria-label="Raghavendra Rao's profile photo"
                        />
                    </div>

                    {/* About Content */}
                    <div className="about-content" aria-label="About Raghavendra Rao">
                        <h3>Software Developer &amp; Full Stack Engineer</h3>

                        <div className="about-info">
                            <p>
                                I'm a software developer with two years of professional experience building and
                                maintaining web applications and responsive client websites.
                            </p>
                            <p>
                                My experience spans frontend development, backend systems, database-driven applications
                                and API development. I've worked with technologies including JavaScript, React, Node.js,
                                Python, Django and SQL.
                            </p>
                            <p>
                                Beyond professional work, I've built full-stack projects involving OCR-based compliance
                                checking, interactive SQL investigations and project management systems. I'm currently
                                pursuing my Master of Computer Applications (MCA) and continuously expanding my software
                                engineering skills.
                            </p>
                        </div>

                        {/* Personal Info */}
                        <div className="personal-info" aria-label="Personal Information of Raghavendra Rao">
                            <div className="info-item">
                                <span className="info-title">Languages:</span>
                                <span>Marathi, Hindi, English</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Email:</span>
                                <span>
                                    <a href="mailto:raoraghav28@gmail.com" aria-label="Email Raghavendra Rao">
                                        raoraghav28@gmail.com
                                    </a>
                                </span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Location:</span>
                                <span>Mumbai, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
