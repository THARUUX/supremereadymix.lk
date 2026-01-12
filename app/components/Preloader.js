"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Preloader.module.scss";

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Artificial loading simulation
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Small delay before unmounting
                    return 100;
                }
                return prev + 2; // Adjust speed here
            });
        }, 20);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className={styles.preloader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className={styles.content}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={styles.logoWrapper}
                >
                    <Image
                        src="/supreme_logo.svg"
                        alt="Supreme Ready-Mix"
                        width={120}
                        height={120}
                        priority
                    />
                </motion.div>

                <div className={styles.progressBar}>
                    <motion.div
                        className={styles.barResult}
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.loadingText}
                >
                    {progress}%
                </motion.p>
            </div>
        </motion.div>
    );
}
