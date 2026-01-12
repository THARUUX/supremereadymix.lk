"use client";

import { motion } from "framer-motion";
import { FaIndustry, FaTruckMoving, FaMountain, FaLayerGroup } from "react-icons/fa";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Company Growth & Capacity
                    </motion.h2>
                </div>

                <div className={styles.statsGrid}>
                    <motion.div className={styles.statItem} whileHover={{ y: -5 }}>
                        <FaIndustry className={styles.icon} />
                        <h3>200+ m³/hr</h3>
                        <p>Production Capacity</p>
                    </motion.div>
                    <motion.div className={styles.statItem} whileHover={{ y: -5 }}>
                        <FaTruckMoving className={styles.icon} />
                        <h3>50+</h3>
                        <p>Truck Mixers & Pumps</p>
                    </motion.div>
                    <motion.div className={styles.statItem} whileHover={{ y: -5 }}>
                        <FaMountain className={styles.icon} />
                        <h3>4</h3>
                        <p>Fully Owned Quarries</p>
                    </motion.div>
                    <motion.div className={styles.statItem} whileHover={{ y: -5 }}>
                        <FaLayerGroup className={styles.icon} />
                        <h3>3</h3>
                        <p>Automated Plants</p>
                    </motion.div>
                </div>

                <div className={styles.details}>
                    <div className={styles.detailBlock}>
                        <h3>Automated Plants</h3>
                        <ul>
                            <li>Colombo</li>
                            <li>Udugampola</li>
                            <li>Bandaragama</li>
                        </ul>
                    </div>
                    <div className={styles.detailBlock}>
                        <h3>Quarry Network</h3>
                        <ul>
                            <li>Horana</li>
                            <li>Giriulla</li>
                            <li>Hanwella</li>
                            <li>Padukka</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
