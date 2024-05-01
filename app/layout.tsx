import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from "./hooks/useLogin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pousadinha do Star Wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-star-gray">
      <body className={`${inter.className}`}>
        <LoginProvider>
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
