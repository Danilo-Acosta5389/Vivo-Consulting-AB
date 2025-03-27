import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavlinkContextProvider from "../context/navlink-context";
import ReCaptchaProvider from "@/context/recaptcha-provide";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Vivo Nurse Consulting",
  description: "Vivo Nurse Consulting AB",
};

const satoshi = localFont({
  src: "fonts/Satoshi-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-slate-100" lang="sv">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="VivoNurse" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        id="home"
        className={`w-full h-full flex flex-col bg-slate-100 ${satoshi.className} antialiased`}
      >
        <ReCaptchaProvider>
          <NavlinkContextProvider>{children}</NavlinkContextProvider>
        </ReCaptchaProvider>
        <Toaster />
      </body>
    </html>
  );
}
