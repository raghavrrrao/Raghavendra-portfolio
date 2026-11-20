import React from 'react';

function Experience() {
    return (
        <section id="experience" className="experience section" aria-labelledby="experience-title">
            <div className="container">
                <h2 className="section-title" id="experience-title">Work Experience</h2>
                
                <div className="timeline" role="list" aria-label="Professional experience timeline">

                    <div className="timeline-item" role="listitem" aria-label="Junior Web Developer at Webkrida, Mumbai, from May 2023 to May 2025">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date" aria-label="Duration">May 2023 – May 2025</div>
                            <h3 className="timeline-title">Junior Web Developer</h3>
                            <div className="timeline-company">
                                <a
                                    href="https://www.webkrida.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Webkrida website"
                                >
                                    Webkrida
                                </a>
                                , Mumbai
                            </div>
                            <ul className="timeline-points">
                                <li>Developed and maintained responsive client websites and HTML email templates.</li>
                                <li>Implemented JavaScript functionality and reusable frontend logic.</li>
                                <li>Debugged production JavaScript issues using Chrome DevTools.</li>
                                <li>Worked with design and backend teams to deliver client requirements.</li>
                                <li>Delivered AMPS 2024 and Jyoti CSC Digital Services websites.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item" role="listitem" aria-label="Internship in Android App Development at Nutpam Technologies from October 2022 to November 2022">
                        <div className="timeline-content glare-hover">
                            <div className="timeline-date" aria-label="Duration">October 2022 – November 2022</div>
                            <h3 className="timeline-title">Android Application Development – Internship</h3>
                            <div className="timeline-company">
                                <a
                                    href="https://www.linkedin.com/company/nutpamtech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Nutpam Technologies LinkedIn page"
                                >
                                    Nutpam Technologies
                                </a>
                            </div>
                            <p>Was taught the basics of application development using Android Studio.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;
