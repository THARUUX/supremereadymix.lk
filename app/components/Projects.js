"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./Projects.module.scss";

const clients = [
    { name: "AA", src: "/customers/aa.svg" },
    { name: "ABC", src: "/customers/abc.svg" },
    { name: "Access", src: "/customers/access.svg" },
    { name: "Advantis", src: "/customers/advantis.svg" },
    { name: "AMR", src: "/customers/amr.svg" },
    { name: "Avenra", src: "/customers/avenra.svg" },
    { name: "Camso", src: "/customers/camso.svg" },
    { name: "CIB", src: "/customers/cib.svg" },
    { name: "Cliftex", src: "/customers/cliftex.svg" },
    { name: "Diyatha", src: "/customers/diyatha.svg" },
    { name: "DNS Wherehouse", src: "/customers/dns-wherehouse.svg" },
    { name: "GHR Global", src: "/customers/ghr-global.svg" },
    { name: "Hilton", src: "/customers/hilton.svg" },
    { name: "Homelands", src: "/customers/homelands.svg" },
    { name: "Melwa", src: "/customers/melwa.svg" },
    { name: "Naturub", src: "/customers/naturub.svg" },
    { name: "Nawaloka", src: "/customers/nawaloka.svg" },
    { name: "NBSL", src: "/customers/nbsl.svg" },
    { name: "Olympia", src: "/customers/olympia.svg" },
    { name: "Prime Group", src: "/customers/primegroup.svg" },
    { name: "R&V", src: "/customers/r&v.svg" },
    { name: "REC", src: "/customers/rec.svg" },
    { name: "RH Holdings", src: "/customers/rh-holdings.svg" },
    { name: "RR Constructions", src: "/customers/rr-constructions.svg" },
    { name: "Rush", src: "/customers/rush.svg" },
    { name: "SMI", src: "/customers/smi.svg" },
    { name: "Tritech", src: "/customers/tritech.svg" },
    { name: "WH", src: "/customers/wh.svg" },
];

const projects = [
    { name: "Canterbury Golf", src: "/Projects/Canterbury Golf.avif", size: "large", description: "Premium Golf Resort & Residencies" },
    { name: "Cargills Art Distribution Center", src: "/Projects/Cargills Art Distribution Center , Katana.avif", size: "wide", description: "Logistics & Distribution Hub" },
    { name: "Dart Global Logistics", src: "/Projects/Dart Global Logistics.avif", size: "normal", description: "Global Logistics Headquarters" },
    { name: "Flood Gates Dikkowita", src: "/Projects/Flood Gates Dikkowita.avif", size: "tall", description: "Infrastructure Development" },
    { name: "Global Park", src: "/Projects/Global Park.avif", size: "normal", description: "Industrial Park Complex" },
    { name: "Hilton DoubleTree Hotel", src: "/Projects/Hilton DoubleTree Hotel.avif", size: "large", description: "Luxury Hospitality Project" },
    { name: "Melwa", src: "/Projects/Melwa.avif", size: "normal", description: "Steel Manufacturing Plant" },
    { name: "Oakwood Enclave", src: "/Projects/Oakwood Enclave.avif", size: "tall", description: "Exclusive Residential Enclave" },
    { name: "Oceana Beach Resort", src: "/Projects/Oceana Beach Resort Apartments & Villas.avif", size: "wide", description: "Beachfront Luxury Apartments" },
    { name: "Prime Beach Front I", src: "/Projects/Prime Beach Front 1.avif", size: "normal", description: "Premium Coastal Living" },
    { name: "Prime Beach Front II", src: "/Projects/Prime Beach Front 2.avif", size: "normal", description: "Extended Beachfront Residencies" },
    { name: "Prime Bella", src: "/Projects/Prime Bella.avif", size: "normal", description: "Modern Urban Living" },
    { name: "The Palace by Prime Group", src: "/Projects/Prime Group The Palace.avif", size: "wide", description: "Ultra-Luxury Apartments" },
    { name: "Santorini Resort Apartments", src: "/Projects/Santorini Resort Apartments.avif", size: "normal", description: "Greek-Inspired Resort Living" },
    { name: "Street Rush Residencies", src: "/Projects/Street Rush Recidencies.avif", size: "normal", description: "Urban Residential Complex" },
    { name: "The Colombo Border", src: "/Projects/The Colombo Border.avif", size: "tall", description: "City Boundary Development" },
];

// Duplicate for infinite scroll
const marqueeClients = [...clients, ...clients, ...clients];

// Tilt Card Component
function TiltCard({ children, className }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); // Tilt range X
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]); // Tilt range Y

    return (
        <motion.div
            className={className}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            whileHover={{ y: -5 }} // Add hover lift here
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </motion.div>
    );
}

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(7);

    // Determine which projects to show
    const visibleProjects = projects.slice(0, visibleCount);
    const isExpanded = visibleCount >= projects.length;

    const handleViewAll = () => {
        setVisibleCount(prev => (prev >= projects.length ? 7 : projects.length));
    };

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.titleWrapper}>
                <h2>Major Projects & Clients</h2>
                <p>Fueling national development with trusted partnerships</p>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.projectsGrid}>
                    {visibleProjects.map((project, index) => (
                        <TiltCard
                            key={index}
                            className={`${styles.projectCard} ${styles[project.size]}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                style={{ width: "100%", height: "100%" }} // Ensure full fill
                            >
                                <div className={styles.projectImageWrapper}>
                                    <Image
                                        src={project.src}
                                        alt={project.name}
                                        fill
                                        className={styles.projectImage}
                                    />
                                    <div className={styles.projectOverlay}>
                                        <div className={styles.textContainer}>
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>

                <div className={styles.viewAllWrapper}>
                    <button onClick={handleViewAll} className={styles.viewAllButton}>
                        {isExpanded ? "Show Less" : "View All Projects"}
                    </button>
                </div>
            </div>


            <div className={styles.marqueeContainer}>
                <motion.div
                    className={styles.marqueeTrack}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                >
                    {marqueeClients.map((client, index) => (
                        <div key={index} className={styles.clientCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    className={styles.clientLogo}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
