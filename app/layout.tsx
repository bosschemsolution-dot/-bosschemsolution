import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://bosschemsolution.com'),
  title: "Boss Chem Solution | Coolant Manufacturer in Surat, Gujarat",
  description: "Boss Chem Solution - Leading engine coolant manufacturer in Surat, Gujarat. Premium radiator coolant, antifreeze coolant, distilled water for battery. ISO certified, 15+ years experience. Best coolant for cars, trucks, industrial vehicles.",
  keywords: "engine coolant, radiator coolant, antifreeze coolant, coolant manufacturer Surat, car coolant, bike coolant, truck coolant, distilled water, battery water, coolant price, best engine coolant, automotive coolant, industrial coolant, Boss Chem Solution",
  authors: [{ name: "Boss Chem Solution" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bosschemsolution.com",
  },
  openGraph: {
    title: "Boss Chem Solution | Coolant Manufacturer in Surat",
    description: "Premium engine coolant & radiator coolant manufacturer in Surat. ISO certified, 15+ years experience. Best coolant for all vehicles.",
    type: "website",
    url: "https://bosschemsolution.com",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Boss Chem Solution - Engine Coolant Manufacturer in Surat",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boss Chem Solution | Coolant Manufacturer in Surat",
    description: "Premium engine coolant & radiator coolant manufacturer in Surat. ISO certified, 15+ years experience.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://bosschemsolution.com/#business",
              "name": "Boss Chem Solution",
              "url": "https://bosschemsolution.com",
              "description": "Premium Engine Coolant and Radiator Coolant Manufacturer in Surat",
              "image": "https://bosschemsolution.com/images/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mission Road",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395001",
                "addressCountry": "IN"
              },
              "telephone": "+918980211051",
              "email": "bossandcoolant@gmail.com",
              "priceRange": "₹",
              "openingHours": "Mo-Sa 09:00-18:00"
            })
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800">
        <Header />
        <main className="pt-[64px] md:pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
