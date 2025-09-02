import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import AppContextProvider from "./components/context.tsx/AppContextProvider";
import Head from "next/head";

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
  title: "Digital Brilliance Solutions",
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased overflow-hidden `}
      >
        <div className="w-screen h-screen bg-darkBlue relative overflow-x-hidden overflow-y-auto">
          <AppContextProvider>{children}</AppContextProvider>
        </div>
      </body>
    </html>
  );
}
