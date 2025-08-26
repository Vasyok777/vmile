import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import localFont from 'next/font/local'

const sfPro = localFont({
  src: [
    {
      path: './fonts/SFPRODISPLAYREGULAR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYBOLD.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYMEDIUM.otf',
      weight: '500',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "Vmline",
  description: "Ranking Najlepszych i Niezawodnych Hostingów w Polsce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.className} antialiased`}
      >
        <Header />
        <main className="flex flex-col gap-12 md:gap-16 mb-[96px] md:mb-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
