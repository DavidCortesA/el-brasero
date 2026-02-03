import type { Metadata } from "next";
import './globals.css';
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Brasero - Auténtica Carne Asada Artesanal",
  description: "Tradición mexicana al fuego de leña. Los mejores cortes, asados a la perfección en Monterrey desde 1987.",
  keywords: ["asador", "carne asada", "monterrey", "parrilla", "brasero", "cortes premium"],
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f1730c",
  openGraph: {
    title: "El Brasero - Auténtica Carne Asada Artesanal",
    description: "Tradición mexicana al fuego de leña. Los mejores cortes, asados a la perfección en Monterrey desde 1987.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "El Brasero - Carne Asada Artesanal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-clay-50 text-charcoal-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
