"use client";

import { motion } from "framer-motion";
import styles from "./FollowUs.module.scss";

const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/supremereadymix/", handle: "@supremereadymix" },
    { name: "Facebook", url: "https://www.facebook.com/supremereadymix/", handle: "Supreme Ready-Mix" },
    { name: "YouTube", url: "https://www.youtube.com/@supremereadymix1", handle: "@supremereadymix1" },
];

export default function FollowUs() {
    return (
        <section className={styles.followUs}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.label}>Social Network</p>
                    <h2>STAY CONNECTED</h2>
                </motion.div>

                <div className={styles.linksWrapper}>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover="hover"
                        >
                            <span className={styles.name}>{link.name}</span>
                            <span className={styles.line} />
                            <motion.span
                                className={styles.handle}
                                variants={{
                                    hover: { x: 0, opacity: 1 }
                                }}
                            >
                                {link.handle}
                            </motion.span>
                            <span className={styles.arrow}>↗</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
