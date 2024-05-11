import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google'
import "./globals.css";
import './styles.css';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
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
      <body className={libre_franklin.variable}>{children}</body>
    </html>
  );
}
