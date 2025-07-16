import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";
import styles from './layout.module.css';
import Link from "next/link";
import { Suspense } from "react";
import { UserButton } from "@/components/UserButton";
import icon from './icon.svg';
import { Sansita_Swashed } from "next/font/google";

const font = Sansita_Swashed({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-special'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <header className={styles.header}>
          <Link href="/" className={styles.title}>
            <img src={icon.src}/>
            GW2 Homesteads
          </Link>
          <Link href="/example" className={styles.link}>
            Example
          </Link>
          <div className={styles.headerActions}>
            <Suspense><UserButton/></Suspense>
          </div>
        </header>
        <main className={styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "gw2homesteads.com",
  description: "Manage your Guild Wars 2 homesteads and share them with the community",
};
