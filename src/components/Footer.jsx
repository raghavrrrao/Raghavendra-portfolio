import React from 'react';

function Footer() {
    return (
        <footer aria-labelledby="footer-heading">
            <div className="container">
                <div className="footer-content">
                    <a
                        href="#hero"
                        className="footer-logo"
                        aria-label="Back to top - Raghavendra Rao"
                        id="footer-heading"
                    >
                        Raghavendra Rao
                    </a>

                    <nav className="footer-socials" aria-label="Social media links">
                        <a
                            href="mailto:raoraghav28@gmail.com"
                            className="footer-social-icon"
                            aria-label="Email Raghavendra Rao"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-icon"
                            aria-label="LinkedIn - Raghavendra Rao"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </nav>

                    <nav className="footer-nav" aria-label="Footer site navigation">
                        <a href="#about" className="footer-link" aria-label="Go to About section">About</a>
                        <a href="#skills" className="footer-link" aria-label="Go to Skills section">Skills</a>
                        <a href="#projects" className="footer-link" aria-label="Go to Projects section">Projects</a>
                        <a href="#experience" className="footer-link" aria-label="Go to Experience section">Experience</a>
                        <a href="#education" className="footer-link" aria-label="Go to Education section">Education</a>
                        <a href="#contact" className="footer-link" aria-label="Go to Contact section">Contact</a>
                    </nav>

                    <div
                        className="copyright"
                        aria-label={`Copyright Raghavendra Rao ${new Date().getFullYear()}`}
                    >
                        &copy; 2024 Raghavendra Rao. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
