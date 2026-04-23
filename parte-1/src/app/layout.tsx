import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import "lenis/dist/lenis.css";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGroteskSans.className} h-full antialiased`}
    >
      <body className="min-h-screen w-full bg-background text-foreground">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
