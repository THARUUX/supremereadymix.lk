import { Maven_Pro, Michroma } from "next/font/google";
import "./globals.scss";
import ClientLayout from "./ClientLayout";

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

export const metadata = {
  title: "Supreme Ready-Mix | Building the Foundation of a Sustainable Sri Lanka",
  description: "Sri Lanka’s leading ready-mix concrete supplier. Committed to quality, sustainability, and innovation in construction. Trusted Strength Since 2010.",
  keywords: ["ready mix concrete", "concrete supplier", "Sri Lanka construction", "sustainable building", "Supreme Ready-Mix", "construction materials"],
  openGraph: {
    title: "Supreme Ready-Mix | Trusted Strength Since 2010",
    description: "Building the Foundation of a Sustainable Sri Lanka with premium ready-mix concrete solutions.",
    url: "https://supremereadymix.lk",
    siteName: "Supreme Ready-Mix",
    images: [
      {
        url: "/social-share.jpg", // Make sure to add this image later or use an existing one
        width: 1200,
        height: 630,
        alt: "Supreme Ready-Mix Site Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Ready-Mix | Trusted Strength Since 2010",
    description: "Leading ready-mix concrete supplier in Sri Lanka.",
    images: ["/social-share.jpg"], // Ensure this exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Supreme Ready-Mix (Pvt) Ltd",
    "url": "https://supremereadymix.lk",
    "logo": "https://supremereadymix.lk/supreme_logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-11-3655555",
      "contactType": "Customer Service",
      "areaServed": "LK",
      "availableLanguage": ["English", "Sinhala"]
    },
    "sameAs": [
      "https://www.facebook.com/supremereadymix/",
      "https://www.instagram.com/supremereadymix/",
      "https://www.youtube.com/@supremereadymix1"
    ]
  };

  return (
    <html lang="en">
      <body className={`${mavenPro.variable} ${michroma.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
