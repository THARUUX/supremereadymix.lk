"use client";

import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaChartLine, FaTruck, FaTools, FaBolt } from "react-icons/fa";
import styles from "./Technology.module.scss";

const features = [
    { icon: FaCogs, title: "Fully Automated Plants", desc: "Batching systems ensuring precision." },
    { icon: FaRobot, title: "AI-Assisted Monitoring", desc: "For consistent quality control." },
    { icon: FaChartLine, title: "Real-time Analytics", desc: "Data-driven decision making." },
    { icon: FaTruck, title: "GPS-Tracked Fleet", desc: "Delivery schedule optimization." },
    { icon: FaTools, title: "Automated Calibration", desc: "Equipment maintained to standards." },
    { icon: FaBolt, title: "Energy Efficient", desc: "Production processes." },
];

export default function Technology() {
    return (
        <section className={styles.technology}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={styles.header}
                >
                    <h2>Technology & Operational Excellence</h2>
                    <p>Leading digital transformation with AI-enabled batching and predictive maintenance.</p>
                </motion.div>

                <div className={styles.grid}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, borderColor: "#FF4C01" }}
                        >
                            <feature.icon className={styles.icon} />
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
