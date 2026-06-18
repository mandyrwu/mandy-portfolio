import type { Metadata } from "next";
import { Inter, Bad_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bad-script",
});

export const metadata: Metadata = {
  title: "Mandy Wu — Product Designer",
  description:
    "Product designer crafting systems-first experiences. Previously at Coinbase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${badScript.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
