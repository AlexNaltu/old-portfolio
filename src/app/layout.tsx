import type { Metadata } from "next";
import {
  Lora,
  Merriweather,
  Open_Sans,
  Oswald,
  Slabo_13px,
} from "next/font/google";
import "./globals.css";

const inter = Merriweather({ subsets: ["latin"], weight: "400" });

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
      <body className={`${inter.className} bg-neutral-950 custom-bg`}>
        {children}
      </body>
    </html>
  );
}
