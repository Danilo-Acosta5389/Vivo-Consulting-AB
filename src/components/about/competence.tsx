import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
//import AutoScroll from "embla-carousel-auto-scroll";

function Competence() {
  const skills = [
    "Take Care",
    "Treserva",
    "Cosmic",
    "Magna Cura",
    "Melior",
    "Viva HSL",
    "Safedoc",
    "Procapita",
    "ICF Vodok 2.0",
    "Pulsen Combine",
    "System Cross",
    "Vas",
    "Journal3",
    "PMO",
    "Lifecare",
    "Alfa eCare",
    "Epsilon",
    "Sekoia",
    "OmsorgProd",
  ];

  const qualities =
    "Palliativa Register, Senior Alert, Beställningsportalen, BPSD registret,Vaccinera, Symfoni, Pascal,MCSS/Appva,LCP, NVP, NPÖ, Quinyx, Medvind WFM";

  return (
    <section className="max-w-7xl w-full flex flex-col items-center justify-center bg-slate-100 py-10 pb-20">
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 mb-14 text-xl">
          Kompetenser
        </p>
      </div>
      <span className="self-start pl-8 text-2xl pb-3">Verktyg</span>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        // plugins={[AutoScroll({ speed: 1 })]}
        className="w-full flex sm:space-x-6"
      >
        <CarouselPrevious
          className=" hidden sm:flex p-5 relative left-3 top-[1.7rem]"
          variant={"ghost"}
        />
        <CarouselContent className="">
          {skills.map((name, index) => (
            <CarouselItem
              key={index}
              className="max-w-fit md:basis-1/2 lg:basis-1/5 "
            >
              <div className="p-1">
                <Card className="bg-blue-950 rounded-2xl">
                  <CardContent className=" p-2 px-4 text-white">
                    <span className="text-xl flex flex-col items-center justify-center whitespace-nowrap">
                      {name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext
          className="hidden sm:flex p-5 relative right-3 top-[1.7rem]"
          variant={"ghost"}
        />
      </Carousel>
      <span className="self-start pl-8 pt-10 pb-3 text-2xl">
        Kvalitetsregister
      </span>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        // plugins={[AutoScroll({ speed: 1, direction: "backward" })]}
        className="w-full flex sm:space-x-6"
      >
        <CarouselPrevious
          className=" hidden sm:flex p-5 relative left-3 top-[1.7rem] "
          variant={"ghost"}
        />
        <CarouselContent className="">
          {qualities
            .trim()
            .split(",")
            .map((name, index) => (
              <CarouselItem
                key={index}
                className="max-w-fit md:basis-1/2 lg:basis-1/5 "
              >
                <div className="p-1">
                  <Card className="bg-blue-950 rounded-2xl">
                    <CardContent className=" p-2 px-4  text-white">
                      <span className="text-xl flex flex-col items-center justify-center whitespace-nowrap">
                        {name}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext
          className="hidden sm:flex p-5 relative right-3 top-[1.7rem]"
          variant={"ghost"}
        />
      </Carousel>
    </section>
  );
}

export default Competence;
