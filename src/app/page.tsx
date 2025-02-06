import Navbar from "./ui/navbar";
import Hero from "./ui/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col items-center justify-center bg-slate-100">
        <div className=" max-w-7xl bg-green-600">
          <section className="">
            <Hero />
          </section>
          <footer>
            <div className=" bg-pink-900 h-[80rem] ">Footer</div>
          </footer>
        </div>
      </main>
    </>
  );
}
