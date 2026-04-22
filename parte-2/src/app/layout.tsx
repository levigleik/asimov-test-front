import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asimov Lab | Curso futurista de Python com IA",
  description:
    "Uma landing page futurista para aprender Python do zero, construir automações, dados, agentes de IA e projetos reais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGroteskSans.className} h-full antialiased`}
    >
      <body className="min-h-screen w-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
