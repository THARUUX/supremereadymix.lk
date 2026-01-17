"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Image
                            src="/supreme_logo_2.svg"
                            alt="Supreme Ready-Mix"
                            width={200}
                            height={60}
                            className={styles.logo}
                        />
                        <p className={styles.slogan}>
                            Concrete you can trust.<br />
                            Partnerships you can rely on.<br />
                            A future we build together.
                        </p>
                    </div>

                    <div className={styles.contactInfo}>
                        <h3>Contact Us</h3>
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.icon} />
                            <a href="tel:0113655555">011 36 55555</a>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.icon} />
                            <a href="mailto:info@supremereadymix.lk">info@supremereadymix.lk</a>
                        </div>
                        <div className={styles.infoItem}>
                            <FaGlobe className={styles.icon} />
                            <a href="https://www.supremereadymix.lk" target="_blank" rel="noopener noreferrer">www.supremereadymix.lk</a>
                        </div>
                    </div>

                    <div className={styles.locations}>
                        <h3>Our Locations</h3>
                        <div className={styles.locationGrid}>
                            <span>Colombo</span>
                            <span>Udugampola</span>
                            <span>Bandaragama</span>
                            <span>Horana</span>
                            <span>Giriulla</span>
                            <span>Hanwella</span>
                            <span>Padukka</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {currentYear} Supreme Ready-Mix. All rights reserved.</p>
                    <div className={styles.links}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
