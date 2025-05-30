import type { Metadata } from "next";

import "./globals.css";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={` antialiased`}>{children}</body>
      </html>
    </ReactLenis>
  );
}
