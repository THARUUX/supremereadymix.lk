"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

const clients = [
    "Prime Group",
    "Hilton DoubleTree Hotel",
    "Cargills Distribution Centers",
    "Oceana Beach Resort",
    "Homelands Skyline",
    "Santorini Resort Apartments",
    "Flood Gate Projects"
];

// Duplicate for infinite scroll
const marqueeClients = [...clients, ...clients, ...clients];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.titleWrapper}>
                <h2>Major Projects & Clients</h2>
                <p>Fueling national development with trusted partnerships</p>
            </div>

            <div className={styles.marqueeContainer}>
                <motion.div
                    className={styles.marqueeTrack}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {marqueeClients.map((client, index) => (
                        <div key={index} className={styles.clientCard}>
                            {client}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
