import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

  return (
    <section className="max-w-7xl flex flex-col items-center justify-center bg-slate-100 py-10 pb-20">
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 mb-14 text-xl">
          Kompetenser
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full flex sm:space-x-6"
      >
        <CarouselPrevious className=" hidden sm:flex p-5 relative left-3 top-7 " />
        <CarouselContent className="">
          {skills.map((name, index) => (
            <CarouselItem
              key={index}
              className="max-w-fit md:basis-1/2 lg:basis-1/5 "
            >
              <div className="p-1">
                <Card className="bg-blue-950 rounded-2xl">
                  <CardContent className=" p-2 px-4  text-white">
                    <span className="text-xl font-semibold flex flex-col items-center justify-center whitespace-nowrap">
                      {name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden sm:flex p-5 relative right-3 top-7" />
      </Carousel>
    </section>
  );
}

export default Competence;
