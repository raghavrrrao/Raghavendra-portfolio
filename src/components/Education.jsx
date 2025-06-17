import React from 'react';

function Education() {
    return (
        <section id="education" className="education section" aria-labelledby="education-title">
            <div className="container">
                <h2 className="section-title" id="education-title">Education</h2>

                <div
                    className="education-cards"
                    role="list"
                    aria-label="List of educational qualifications"
                >

                    <div
                        className="education-card glare-hover"
                        role="listitem"
                        aria-label="Bachelor of Science in Information Technology from University of Mumbai, 2020 to 2023"
                    >
                        <div className="education-year" aria-label="Duration">2020 - 2023</div>
                        <h3 className="education-degree">B.Sc. I.T</h3>
                        <div className="education-school">University of Mumbai</div>
                        <p>
                            Studied core computer science concepts including programming fundamentals, database management,
                            web technologies, and software development.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;
