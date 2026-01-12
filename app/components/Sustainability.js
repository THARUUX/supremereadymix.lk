"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSolarPanel, FaWind } from "react-icons/fa";
import styles from "./Sustainability.module.scss";

export default function Sustainability() {
    return (
        <section className={styles.sustainability}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Sustainability & Green Construction</h2>
                    <p className={styles.tagline}>Our projects create progress — not pollution.</p>
                    <p className={styles.desc}>
                        Sustainability is part of our daily operations. We are committed to low-carbon construction, energy efficiency, and responsible resource management.
                    </p>

                    <div className={styles.initiatives}>
                        <div className={styles.item}>
                            <FaLeaf className={styles.icon} />
                            <span>Low-carbon alternatives</span>
                        </div>
                        <div className={styles.item}>
                            <FaSolarPanel className={styles.icon} />
                            <span>Energy-efficient plants</span>
                        </div>
                        <div className={styles.item}>
                            <FaRecycle className={styles.icon} />
                            <span>Water recycling systems</span>
                        </div>
                        <div className={styles.item}>
                            <FaWind className={styles.icon} />
                            <span>Dust control & waste reduction</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imagePlaceholder}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Can be an image or abstract graphic */}
                    <div className={styles.circle}>
                        <span>Eco-Friendly</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
