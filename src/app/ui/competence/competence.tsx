import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Competence() {
  const skills = [
    "Take Care",
    "Magna Cura",
    "Treserva",
    "Cosmic",
    "Melior",
    "Viva",
    "Vita",
    "Vigor",
  ];
  return (
    <section className="max-w-7xl flex flex-col items-center justify-center bg-slate-50 py-8">
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 mb-5 text-xl">
          Kompetenser
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full lg:max-w-4xl max-w-[400px]"
      >
        <CarouselContent className="">
          {skills.map((name, index) => (
            <CarouselItem
              key={index}
              className="max-w-xs md:basis-1/2 lg:basis-1/5 "
            >
              <div className="p-1">
                <Card className="">
                  <CardContent className=" p-1 bg-blue-800 rounded-lg text-white">
                    <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                      {name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="sm:hidden flex items-center justify-between w-full absolute top-[25] pointer-events-none z-0">
          <CarouselPrevious className="static z-50 pointer-events-auto" />
          <CarouselNext className="static z-50 pointer-events-auto" />
        </div>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}

export default Competence;
