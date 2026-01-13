"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className={styles.hero}>
            <motion.div style={{ y, opacity }} className={styles.parallaxBg}>
                <motion.div
                    className={styles.parallaxLayer}
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                />
            </motion.div>

            <div className={styles.heroOverlay}>
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.textContent}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className={styles.logoMark}
                    >
                        <Image src="/supreme_logo.svg" alt="Supreme Icon" width={100} height={100} />
                    </motion.div>

                    <h1>Building the Foundation of a Sustainable Sri Lanka</h1>
                    <p>Trusted Strength Since 2010</p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.ctaButton}
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Discover More
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span>↓</span>
            </motion.div>
        </section>
    );
}
