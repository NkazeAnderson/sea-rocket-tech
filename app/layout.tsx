import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppContextProvider from "./components/context.tsx/AppContextProvider";

const inter = Inter({
  weight: ["400", "700", "600", "300"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "700", "600", "300"],
  subsets: ["latin"],
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
        className={`${inter.variable} ${poppins.variable} antialiased overflow-hidden `}
      >
        <div className="w-screen h-screen bg-darkBlue relative overflow-x-hidden overflow-y-auto">
          <AppContextProvider>
            <NavBar />

            {children}
            <Footer />
          </AppContextProvider>
        </div>
      </body>
    </html>
  );
}
