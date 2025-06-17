import React from 'react';

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-container">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:raoraghav28@gmail.com">raoraghav28@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 8879300301</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Mumbai, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Visit Raghavendra Rao on LinkedIn"
                                    >
                                        Raghavendra Rao
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="form-group">
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    maxLength="100"
                                    autoComplete="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                    maxLength="100"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="sr-only">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                    maxLength="200"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    placeholder="Your Message"
                                    required
                                    maxLength="1000"
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            {/* Honeypot field */}
                            <input type="text" name="website" style={{ display: "none" }} aria-hidden="true" />
                            <button type="submit" className="btn" aria-label="Send message form button">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
