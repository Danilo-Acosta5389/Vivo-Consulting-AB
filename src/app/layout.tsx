import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavlinkContextProvider from "../context/navlink-context";
import ReCaptchaProvider from "@/context/recaptcha-provide";

export const metadata: Metadata = {
  title: "Vivo Consulting AB",
  description: "Beskrivning av Vivo Consulting AB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-slate-100" lang="sv">
      <body id="home" className="w-full h-full flex flex-col bg-slate-100">
        <ReCaptchaProvider>
          <NavlinkContextProvider>{children}</NavlinkContextProvider>
        </ReCaptchaProvider>
        <Toaster />
      </body>
    </html>
  );
}
