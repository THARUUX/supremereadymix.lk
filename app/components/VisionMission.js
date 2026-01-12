"use client";

import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaGem, FaCheckCircle, FaLeaf, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import styles from "./VisionMission.module.scss";

const values = [
    { icon: FaShieldAlt, title: "Integrity", text: "Honest, transparent, and accountable" },
    { icon: FaCheckCircle, title: "Quality", text: "Every batch meets international standards" },
    { icon: FaLightbulb, title: "Innovation", text: "Smart technology and modern processes" },
    { icon: FaLeaf, title: "Sustainability", text: "Responsibility to people and planet" },
    { icon: FaGem, title: "Excellence", text: "Continuous improvement in every project" },
];

export default function VisionMission() {
    return (
        <section className={styles.visionMission}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={`${styles.card} ${styles.vision}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper}><FaEye /></div>
                        <h2>Vision</h2>
                        <p>To be Sri Lanka’s most trusted and innovative ready-mix concrete solutions provider, recognized locally and globally for Excellence, Sustainability, and Smart construction.</p>
                    </motion.div>

                    <motion.div
                        className={`${styles.card} ${styles.mission}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper}><FaBullseye /></div>
                        <h2>Mission</h2>
                        <p>To continuously invest in Technology, People, and Sustainability while delivering high-quality concrete solutions that support progress, improve safety, and protect the environment.</p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.valuesSection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Core Values</h2>
                    <div className={styles.valuesGrid}>
                        {values.map((val, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                whileHover={{ y: -10 }}
                            >
                                <val.icon className={styles.valueIcon} />
                                <h3>{val.title}</h3>
                                <p>{val.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
