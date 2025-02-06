import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className=" w-full h-full bg-green-400 flex flex-col items-center justify-center relative">
      <Image
        width={1920}
        height={1080}
        src="/hero2.jpg"
        alt="Image of healthcare people"
        className=""
      />
      <div className="z-10 absolute text-white text-center">
        <h1 className="text-3xl font-semibold mb-5">
          Trygg och flexibel bemanning inom vården
        </h1>
        <p className="text-lg font-semibold max-w-4xl mb-5">
          En erfaren specialistsjuksköterska som erbjuder trygg och flexibel
          bemanning direkt till verksamheter eller via bemanningsföretag –
          alltid med fokus på kontinuitet, kvalitet och patientens bästa.
        </p>
        <Button className=" bg-teal-600 hover:bg-teal-700">Kontakta oss</Button>
      </div>
    </div>
  );
}
export default Hero;
