"use client";
import "styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Navbar from "@elements/Navbar"
import { Anonymous_Pro } from 'next/font/google'

const pro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pro',
})

interface Props {
  children: ReactNode;
  session: any
}
export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <header>
        <link rel="shortcut icon" href="https://imagewise-tidb-2023.vercel.app/logo.ico" sizes="any" />
        <title>ImageWise</title>
        {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FHFT7CLFCD"></script>
        {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/js/script.js" type="module"></script>
      </header>
      <body className={pro.variable}>

        <SessionProvider session={session}>
          <Navbar />
          <div className="h-screen ">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
