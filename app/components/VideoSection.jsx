"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./VideoSection.module.scss";

export default function VideoSection() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const videoId = "lOtTHi13Xz4";
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <section className={styles.videoSection} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Experience Our Excellence</h2>
                    <p>See how we are building the future of Sri Lanka, one mix at a time.</p>
                </motion.div>

                <motion.div
                    className={styles.thumbnailWrapper}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onClick={() => setIsOpen(true)}
                >
                    <Image
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        width={1280}
                        height={720}
                        className={styles.thumbnail}
                    />
                    <div className={styles.playButtonOverlay}>
                        <motion.div
                            className={styles.playButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={styles.playIcon}>▶</span>
                        </motion.div>
                        <div className={styles.pulse} />
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
                            <div className={styles.iframeWrapper}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Supreme Ready-Mix Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
