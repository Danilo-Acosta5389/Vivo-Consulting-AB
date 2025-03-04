import { useNavlinkContext } from "@/context/navlink-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref, inView } = useInView();
  const { setActiveLink } = useNavlinkContext();
  useEffect(() => {
    if (inView) {
      setActiveLink("");
    }
  }, [inView, setActiveLink]);
  return (
    <section className=" overflow-hidden bg-slate-500 flex flex-col items-center justify-center relative min-h-[428px] h-full">
      <Image
        width={1440}
        height={428}
        src="/hero.png"
        alt="Image of healthcare people"
        className=" max-w-fit min-h-[428px] relative z-0 -right-28 sm:-right-0"
      />
      <div className=" w-fit px-4 z-20 absolute text-white text-center flex flex-col items-center justify-center font-normal">
        <h1 className=" sm:text-4xl text-3xl mb-5 ">
          Trygg och flexibel bemanning inom vården
        </h1>
        <p className="sm:text-xl text-lg max-w-5xl mb-5 ">
          Erfaren specialistsjuksköterska som erbjuder trygg och flexibel
          bemanning direkt till verksamheter eller via bemanningsföretag alltid
          med fokus på kontinuitet, kvalitet och patientens bästa
        </p>
        <Link href={"#contact"} className="">
          <Button
            ref={ref}
            size={"lg"}
            className=" text-xl bg-teal-600 hover:bg-teal-700"
          >
            Kontakta oss
          </Button>
        </Link>
      </div>
      <div className="h-full w-full absolute z-10 p-28 bg-gradient-to-t from-transparent via-slate-900 to-transparent blur-3xl opacity-90"></div>
    </section>
  );
}
export default Hero;
