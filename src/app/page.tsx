import Navbar from "./ui/navbar/navbar";
import Hero from "./ui/hero/hero";
import About from "./ui/about/about";
import References from "./ui/reference/reference";
import Contact from "./ui/contact/contact";
import Competence from "./ui/competence/competence";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" w-full flex flex-col items-center justify-center bg-slate-50">
        <div className=" w-full max-w-7xl bg-slate-200">
          <Hero />
          <About />
          <Competence />
          <References />
          <Contact />
        </div>
      </main>
    </>
  );
}
