import "@/app/globals.css";
import { PropsWithChildren } from "react";
// existing layout component continues…

import { Inter, Space_Grotesk } from "next/font/google";

const inter   = Inter({ subsets: ["latin"], variable: "--font-sans" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata = { /* … */ };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
