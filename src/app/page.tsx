"use client";

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import References from "../components/reference/reference";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" w-full flex flex-col items-center justify-center bg-slate-50">
        <div className=" w-full max-w-7xl bg-slate-200">
          <Hero />
          <About />
          <References />
          <Contact />
        </div>
      </main>
    </>
  );
}
