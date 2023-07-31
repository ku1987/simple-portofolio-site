import "./globals.css";
import type { Metadata } from "next";
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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div
          id="container"
          className="flex flex-col items-center justify-between"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
