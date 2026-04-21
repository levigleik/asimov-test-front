import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curso de Python com IA | Aprenda do zero com projetos reais",
  description:
    "Aprenda Python do zero com um curso prático, projetos reais com IA, suporte da comunidade e certificado reconhecido pelo mercado.",
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
