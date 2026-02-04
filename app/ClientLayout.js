"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <SmoothScroll>
                    <Navbar />
                    <main>{children}</main>
                    <Contact />
                </SmoothScroll>
            )}
        </>
    );
}
