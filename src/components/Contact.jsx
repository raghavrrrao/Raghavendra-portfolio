import React, { useState } from 'react';

function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);

        try {
            const response = await fetch(
                "https://formspree.io/f/mvzbawwv",
                {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                }
            );

            if (response.ok) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
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
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                            </div>

                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                            </div>

                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
                            </div>

                            {/* Honeypot */}
                            <input type="text" name="website" style={{ display: "none" }} />

                            <button type="submit" className="btn" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p style={{ color: "green", marginTop: "10px" }}>
                                    Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p style={{ color: "red", marginTop: "10px" }}>
                                    Something went wrong. Try again.
                                </p>
                            )}

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
