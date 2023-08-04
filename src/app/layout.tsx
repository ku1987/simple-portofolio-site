import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kei Usami",
  description: "Software engineer living near the ocean.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-J9RX3JR6WE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-J9RX3JR6WE');
        `}
      </Script>

      <body className={`${inter.className}`}>
        <Header />
        <div
          id="container"
          className="flex flex-col items-center justify-between mb-8 min-h-65"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
