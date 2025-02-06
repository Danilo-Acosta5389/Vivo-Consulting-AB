import Navbar from "./ui/navbar";
import Hero from "./ui/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col items-center justify-center bg-slate-50">
        <div className=" max-w-7xl bg-green-600">
          <section className=" w-[1280px]">
            <Hero />
          </section>
          <footer>
            <div className=" bg-slate-100 h-[80rem] ">Footer</div>
          </footer>
        </div>
      </main>
    </>
  );
}
