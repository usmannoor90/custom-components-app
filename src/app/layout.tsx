import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationSelect from "@/components/NavigationSelect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custome Components- M Usman",
  description: "Custome Components by M Usman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavigationSelect />
        </header>
        <div className=" mt-6 ">{children}</div>
      </body>
    </html>
  );
}
