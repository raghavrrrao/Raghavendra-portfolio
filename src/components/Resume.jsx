import React from "react";

function Resume() {
    return (
        <section id="resume" className="resume section">
            <div className="container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-card project-card">
                    <div className="resume-content">
                        <h3>Raghavendra Rao</h3>
                        <p>
                            Full Stack Developer with experience in Web Development,
                            Database Systems, and Interactive UI Engineering.
                        </p>

                        <div className="resume-actions">
                            <a
                                href="/resume/Raghavendra_Rao_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn resume-btn"
                            >
                                View Resume
                            </a>

                            <a
                                href="/resume/Raghavendra_Rao_Resume.pdf"
                                download
                                className="btn resume-btn-outline"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
