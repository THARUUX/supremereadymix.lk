"use client";

import { Maven_Pro, Michroma } from "next/font/google";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const michroma = Michroma({
  subsets: ["latin"],
  variable: "--font-michroma",
  weight: "400",
});

// Since we are using "use client" for loading state, we can't export metadata directly here.
// Best practice for root layout with metadata + client logic is to separate them, 
// OR use a wrapper component. For simplicity in this structure, I'll keep the client logic here 
// but note that 'metadata' export won't work in "use client".
// CORRECT APPROACH: Move the layout UI to a client component wrapper or remove "use client" and use a separate Loading provider.
// ADJUSTMENT: I will remove "use client" from here, and create a `Providers` or `ClientLayout` component.
// WAIT: The prompt is to "Create a modern animated loading screen".
// I'll create a new component `ClientLayout` that handles the loading state and wrap it here.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Supreme Ready-Mix | Trusted Strength Since 2010</title>
        <meta name="description" content="Sri Lanka’s leading ready-mix concrete supplier." />
        <link rel="icon" href="/supreme_logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${mavenPro.variable} ${michroma.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

function ClientLayout({ children }) {
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
