import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Shahil Vk | Full Stack Developer",
  description: "Portfolio of Shahil Vk - .NET & React Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}