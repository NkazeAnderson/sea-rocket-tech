import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
  weight: ["400", "700", "600", "300"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "700", "600", "300"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sea Rocket Tech",
  description:
    "Software Engineering company in Cameroon. We build stunning websites and mobile apps for companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <div className="w-screen min-h-screen bg-darkBlue relative">
          <NavBar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
