import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className=" overflow-hidden bg-slate-500 flex flex-col items-center justify-center relative">
      <Image
        width={1920}
        height={1080}
        src="/hero2.jpg"
        alt="Image of healthcare people"
        className="min-w-fit pr-96 opacity-70"
      />
      <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-screen px-4 z-10 absolute text-white text-center flex flex-col items-center justify-center">
        <h1 className=" sm:text-4xl text-3xl font-bold mb-5">
          Trygg och flexibel bemanning inom vården
        </h1>
        <p className="sm:text-xl text-lg font-bold max-w-screen-sm mb-5">
          En erfaren specialistsjuksköterska som erbjuder trygg och flexibel
          bemanning direkt till verksamheter eller via bemanningsföretag alltid
          med fokus på kontinuitet, kvalitet och patientens bästa.
        </p>
        <Button className=" bg-teal-600 hover:bg-teal-700">Kontakta oss</Button>
      </div>
    </div>
  );
}
export default Hero;
