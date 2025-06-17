import React from 'react';

function Experience() {
    return (
        <section id="experience" className="experience section" aria-labelledby="experience-title">
            <div className="container">
                <h2 className="section-title" id="experience-title">Work Experience</h2>
                
                <div className="timeline" role="list" aria-label="Professional experience timeline">

                    <div className="timeline-item" role="listitem" aria-label="Junior Web Developer at Webkrida from May 2023 to Present">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date" aria-label="Duration">May 2023 - Present</div>
                            <h3 className="timeline-title">Junior Web Developer</h3>
                            <div className="timeline-company">
                                <a
                                    href="https://www.webkrida.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Webkrida website"
                                >
                                    Webkrida
                                </a>
                            </div>
                            <p>
                                Develop various responsive web pages and email templates using Bootstrap and grid layouts as
                                per requirements. Implement required changes in existing or previously developed pages.
                                Debug and resolve any issues occurring in JavaScript code.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item" role="listitem" aria-label="Internship in Android App Development at Nutpam Technologies from October 2022 to November 2022">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date" aria-label="Duration">October 2022 - November 2022</div>
                            <h3 className="timeline-title">Android Application Development - Internship</h3>
                            <div className="timeline-company">
                                <a
                                    href="https://www.linkedin.com/company/nutpamtech/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Nutpam Technologies LinkedIn page"
                                >
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
