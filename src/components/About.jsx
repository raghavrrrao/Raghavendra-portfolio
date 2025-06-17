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
                        <h3>Web Developer & Technology Enthusiast</h3>

                        <div className="about-objective">
                            <h4>Career Objective</h4>
                            <p>
                                To secure a challenging and rewarding position in a growth-oriented organization that
                                provides opportunities for career advancement.
                            </p>
                        </div>

                        <div className="about-info">
                            <p>
                                I am a self-learner with a passion for web technologies. Since May 2023, I've been working
                                with various web technologies, including HTML/HTML5, CSS, Bootstrap, JavaScript, ES6, and
                                jQuery.
                            </p>
                            <p>
                                I'm experienced in designing, developing, and maintaining web applications, responsive pages,
                                and email templates. I'm proficient in the Bootstrap framework and well-versed in JavaScript
                                methods. I'm committed to writing clean and maintainable code, and I'm enthusiastic about
                                continuous learning and staying updated with the latest trends in web development.
                            </p>
                        </div>

                        {/* Personal Info */}
                        <div className="personal-info" aria-label="Personal Information of Raghavendra Rao">
                            <div className="info-item">
                                <span className="info-title">Date of Birth:</span>
                                <span>21 July 2002</span>
                            </div>
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
                                <span>Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
