import type { Metadata } from "next";

import "@app/globals.scss";
import styles from "./MainLayout.module.scss";
import Header from "@components/Header";



export const metadata: Metadata = {
  title: "PoofWay",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body >
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <Header/>
          <main className={styles.content}>
            {children}
          </main>
        </div>
      </div>
    </body>
    </html>
  );
}
