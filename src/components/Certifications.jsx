import React from "react";
import certificationsData from "../data/certificationsData";
import "../styles/main.css";

function Certifications() {
    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="certifications-grid">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className={`project-card cert-card ${cert.featured ? "featured-cert" : ""}`}
                        >

                            <div className="cert-content">
                                {cert.featured && (
                                    <span className="cert-badge">Verified Certification</span>
                                )}

                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-year">{cert.year}</p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Certifications;
