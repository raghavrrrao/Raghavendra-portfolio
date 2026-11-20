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
                        aria-label="Master of Computer Applications from VIVA Institute of Technology, Virar, University of Mumbai, 2025 to 2027, expected completion 2027"
                    >
                        <div className="education-year" aria-label="Duration">2025 – 2027</div>
                        <h3 className="education-degree">Master of Computer Applications (MCA)</h3>
                        <div className="education-school">VIVA Institute of Technology, Virar – University of Mumbai</div>
                        <p>
                            <strong>Expected completion:</strong> 2027
                        </p>
                    </div>

                    <div
                        className="education-card glare-hover"
                        role="listitem"
                        aria-label="Bachelor of Science in Information Technology from Nagindas Khandwala College, Mumbai, University of Mumbai, 2020 to 2023, CGPA 9.03 out of 10"
                    >
                        <div className="education-year" aria-label="Duration">2020 – 2023</div>
                        <h3 className="education-degree">Bachelor of Science in Information Technology (B.Sc. IT)</h3>
                        <div className="education-school">Nagindas Khandwala College, Mumbai – University of Mumbai</div>
                        <p>
                            Studied core computer science concepts including programming fundamentals, database management,
                            web technologies, and software development.
                        </p>
                        <p>
                            <strong>CGPA:</strong> 9.03/10
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;
