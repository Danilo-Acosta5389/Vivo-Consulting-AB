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
    <section className="overflow-hidden h-full w-full bg-slate-500 flex flex-col items-center justify-center relative">
      <div className=" h-full w-full flex items-center justify-center min-h-[22rem] md:h-screen md:max-h-[35rem] md:min-h-[30rem] relative md:right-[30rem] lg:right-[20rem] xl:right-[10rem] 2xl:right-[0rem]">
        <Image
          fill
          objectFit="cover"
          src="/hero.png"
          alt="Image of healthcare people"
          className=" h-full min-w-fit md:block hidden"
        />
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          src="/hero-small.png"
          alt="Image of healthcare people"
          className=" md:hidden block"
        />
      </div>
      <div className=" w-fit px-4 z-20 space-y-2 md:space-y-5 absolute text-white text-center flex flex-col items-center justify-center font-normal top-1/5 md:top-0 md:bottom-0">
        <h1 className=" sm:text-4xl text-2xl font-medium">
          Trygg och flexibel bemanning inom vården
        </h1>
        <p className="sm:text-xl text-base leading-tight sm:leading-normal font-light max-w-5xl">
          Erfaren specialistsjuksköterska som erbjuder trygg och flexibel
          bemanning direkt till verksamheter eller via bemanningsföretag alltid
          med fokus på kontinuitet, kvalitet och patientens bästa
        </p>
        <Link href={"#contact"} className="md:scale-125 pt-5">
          <Button
            ref={ref}
            size={"default"}
            className=" text-lg font-normal px-3 py-5 bg-teal-700 hover:bg-teal-700"
          >
            Kontakta oss
          </Button>
        </Link>
      </div>
      <div className="h-full w-full absolute z-10 p-28 bg-gradient-to-t from-transparent via-slate-900 to-transparent blur-3xl opacity-80"></div>
    </section>
  );
}
export default Hero;
