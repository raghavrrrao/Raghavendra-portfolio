import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <a href="#hero" className="footer-logo">Raghavendra Rao</a>

                    <div className="footer-socials">
                        <a href="mailto:raoraghav28@gmail.com" className="footer-social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-icon"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>

                    <div className="footer-nav">
                        <a href="#about" className="footer-link">About</a>
                        <a href="#skills" className="footer-link">Skills</a>
                        <a href="#projects" className="footer-link">Projects</a>
                        <a href="#experience" className="footer-link">Experience</a>
                        <a href="#education" className="footer-link">Education</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>

                    <div className="copyright">
                        &copy; {new Date().getFullYear()} Raghavendra Rao. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
