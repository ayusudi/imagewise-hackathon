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
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
        <title>ImageWise</title>
        <script src="/js/script.js" type="module"></script>
      </head>
      <body className={pro.variable}>

        <SessionProvider session={session}>
          <Navbar />
          <div className="h-screen ">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
