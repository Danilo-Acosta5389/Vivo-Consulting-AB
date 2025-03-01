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
    <section className=" overflow-hidden bg-slate-500 flex flex-col items-center justify-center relative max-h-[25rem]">
      <Image
        width={1920}
        height={1080}
        src="/hero2.jpg"
        alt="Image of healthcare people"
        className="max-w-fit opacity-70"
      />
      <div className=" w-fit px-4 z-10 absolute text-white text-center flex flex-col items-center justify-center font-normal">
        <h1 className=" sm:text-4xl text-3xl mb-5 z-20">
          Trygg och flexibel bemanning inom vården
        </h1>
        <p className="sm:text-xl text-lg max-w-5xl mb-5 z-20">
          Erfaren specialistsjuksköterska som erbjuder trygg och flexibel
          bemanning direkt till verksamheter eller via bemanningsföretag alltid
          med fokus på kontinuitet, kvalitet och patientens bästa
        </p>
        <Link href={"#contact"} className="z-20">
          <Button
            ref={ref}
            size={"lg"}
            className=" text-xl bg-teal-600 hover:bg-teal-700"
          >
            Kontakta oss
          </Button>
        </Link>
        <div className="h-full w-full absolute z-10 p-28 bg-gradient-to-t from-transparent via-slate-900 to-transparent blur-3xl opacity-90"></div>
      </div>
    </section>
  );
}
export default Hero;
