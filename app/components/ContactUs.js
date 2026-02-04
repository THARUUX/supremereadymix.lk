"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "f7d7a0f8-1804-4cec-9cdd-924735755581");
        formData.append("subject", "New Contact Request from Supreme Ready-Mix Website");
        formData.append("from_name", "Supreme Ready-Mix Website");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error! Please try again later.");
        }
    };

    return (
        <section id="contact" className={styles.contactUs}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2>Let's Build Together</h2>
                    <p>Ready to start your project? Get in touch with us for a consultation or quote.</p>
                </motion.div>

                <div className={styles.contentWrapper}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.infoColumn}
                    >
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>Hotline: <a href="tel:0113655555">011 36 55555</a></p>
                                <p>Sales: <a href="tel:+94721330630">+94 72 133 0630</a></p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p><a href="mailto:info@supremereadymix.lk">info@supremereadymix.lk</a></p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>Head Office: 123, Supreme Tower,<br />Colombo 03, Sri Lanka</p>
                            </div>
                        </div>

                        <div className={styles.socialActions}>
                            <a href="https://wa.me/94721330630" className={styles.whatsappBtn}>
                                <FaWhatsapp /> Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={styles.formColumn}
                    >
                        <form className={styles.contactForm} onSubmit={onSubmit}>
                            <div className={styles.formGroup}>
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="John Doe" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="+94 7X XXX XXXX" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Project Details</label>
                                <textarea name="message" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Send Message <FaArrowRight />
                            </button>
                            {result && <span className={styles.formResult}>{result}</span>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
