import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot check
        if (e.target.website.value) {
            return; // bot detected
        }

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const subject = e.target.subject.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields.");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                'service_qm2md1b',
                'template_xgc380m',
                {
                    name,
                    email,
                    subject,
                    message
                },
                'jElV5HhB5f0GtgM8R'
            );

            alert("Message sent successfully!");
            e.target.reset();
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>

                <div className="contact-container">

                    {/* Contact Info */}
                    <div className="contact-info">

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:raoraghav28@gmail.com">raoraghav28@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-phone"></i></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 8879300301</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                            <div>
                                <h3>Location</h3>
                                <p>Mumbai, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/raghavendra-rao-794112200/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Raghavendra Rao
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                    maxLength="100"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                    required
                                    maxLength="100"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    required
                                    maxLength="200"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    placeholder="Your Message"
                                    required
                                    maxLength="1000"
                                />
                            </div>

                            {/* Honeypot */}
                            <input
                                type="text"
                                name="website"
                                style={{ display: "none" }}
                                aria-hidden="true"
                            />

                            <button type="submit" className="btn" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
