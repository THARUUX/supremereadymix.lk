"use client";

import { motion } from "framer-motion";
import styles from "./About.module.scss";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className={styles.textColumn}
                >
                    <h2>Trusted Strength Since 2010</h2>
                    <p className={styles.lead}>
                        Founded in 2010, Supreme Ready-Mix has grown from a small regional supplier into one of Sri Lanka’s leading ready-mix concrete companies.
                    </p>
                    <p>
                        We specialize in high-performance, reliable, and sustainable concrete solutions that support national development. Through technology, automation, and strict quality standards, we have earned the trust of major developers and construction firms across the country.
                    </p>
                    <p>
                        Even during difficult economic and global conditions, our team continued to deliver with discipline, resilience, and innovation.
                    </p>

                    <div className={styles.quoteBox}>
                        <p>We are not just producing concrete — we are building the foundation of a sustainable Sri Lanka.</p>
                    </div>

                    <div className={styles.purpose}>
                        <h3>Our Purpose</h3>
                        <p>
                            Supreme Ready-Mix was founded with one promise: <strong>to redefine the standards of ready-mix concrete in Sri Lanka.</strong> Today, we are a trusted partner in national infrastructure and urban development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
