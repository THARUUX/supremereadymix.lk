"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaUsers, FaShieldAlt } from "react-icons/fa";
import styles from "./HumanCapital.module.scss";

export default function HumanCapital() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className={styles.humanCapital}>
            <div className={styles.parallaxWrapper}>
                <motion.div style={{ y }} className={styles.parallaxImage}></motion.div>
            </div>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>HUMAN CAPITAL</h2>
                    <p className={styles.tagline}>Our strength isn’t just concrete it’s the people who perfect it.</p>
                    <p className={styles.desc}>
                        At Supreme Ready-Mix, safety and people are at the core of our operational philosophy.
                        We believe that a strong workforce builds strong foundations both literally and culturally.
                    </p>

                    <div className={styles.sectionsWrapper}>
                        <div className={styles.sectionBlock}>
                            <h3><FaShieldAlt className={styles.sectionIcon} /> Health, Safety & Environment (HSE) Practices:</h3>
                            <ul className={styles.featureList}>
                                <li>Comprehensive safety protocols across all plants and worksites.</li>
                                <li>Continuous training on occupational safety and emergency response.</li>
                                <li>Personal protective equipment (PPE) compliance for all operational staff.</li>
                                <li>Regular audits and hazard prevention systems.</li>
                                <li>Water spraying and dust suppression for air-quality management.</li>
                            </ul>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3><FaUsers className={styles.sectionIcon} /> People-Centered Culture:</h3>
                            <ul className={styles.featureList}>
                                <li>Multi-skilled workforce of over 100 professionals and technicians.</li>
                                <li>Equal opportunity environment promoting growth and innovation.</li>
                                <li>Reward programs recognizing productivity, innovation, and teamwork.</li>
                                <li>In-house technical training sessions to upgrade knowledge and skills.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
