import React from 'react';

function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">

                    <div className="timeline-item">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date">May 2023 - Present</div>
                            <h3 className="timeline-title">Junior Web Developer</h3>
                            <div className="timeline-company">
                                <a href="https://www.webkrida.com/" target="_blank" rel="noreferrer">Webkrida</a>
                            </div>
                            <p>Develop various responsive web pages and email templates using Bootstrap and grid layouts as
                                per requirements. Implement required changes in existing or previously developed pages.
                                Debug and resolve any issues occurring in JavaScript code.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date">October 2022 - November 2022</div>
                            <h3 className="timeline-title">Android Application Development - Internship</h3>
                            <div className="timeline-company">
                                <a href="https://www.linkedin.com/company/nutpamtech/" target="_blank" rel="noreferrer">
                                    Nutpam Technologies
                                </a>
                            </div>
                            <p>Was taught basics of Application development using Android Studio.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;
