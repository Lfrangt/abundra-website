import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Abundra Capital Inc. - AI × Blockchain × Digital Capital",
  description:
    "Building a tech platform that integrates AI, blockchain, and digital capital for a more abundant, intelligent, and peaceful future.",
  keywords:
    "AI, blockchain, digital capital, BTC, ETH, Cardano, Web3, investment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-abundra-dark">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
