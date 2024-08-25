import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Fira_Code({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Naltu Alexandru Portfolio",
  description: " Portfolio of Naltu Alexandru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>{children}</body>
    </html>
  );
}
