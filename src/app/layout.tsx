import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ['100', '200', '400', '600', '800'],
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Chidubem Chuba-Nwene",
  description: "A Personal Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
