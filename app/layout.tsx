"use client";
import "styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from 'next/head';
import { ReactNode, useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/script.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
        <title>ImageWise</title>
      </Head>
      <body className={pro.variable}>

        <SessionProvider session={session}>
          <Navbar />
          <div className="h-screen ">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
