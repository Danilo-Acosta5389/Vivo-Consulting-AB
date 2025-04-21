import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
//import { InfiniteMovingLogos } from "./infinite-moving-logos";
import * as motion from "motion/react-client";
import { useNavlinkContext } from "@/context/navlink-context";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LogoCarousel from "./carousel-logos";

function References() {
  const { ref, inView } = useInView();
  const { setActiveLink } = useNavlinkContext();
  const clients = [
    {
      name: "Region Stockholm",
      image: "/kunder/region-sthlm.png",
    },
    {
      name: "Attendo",
      image: "/kunder/Attendo.jpeg",
    },
    {
      name: "Forenede",
      image: "/kunder/forenede.png",
    },
    {
      name: "Iocum",
      image: "/kunder/iocum.svg",
    },
    {
      name: "Silverhemmen",
      image: "/kunder/silverhemmen.png",
    },
    {
      name: "Stockholm Stad",
      image: "/kunder/sthlm-stad.png",
    },
    {
      name: "Vardaga",
      image: "/kunder/vardaga.png",
    },
    {
      name: "Region Stockholm",
      image: "/kunder/region-sthlm.png",
    },
    {
      name: "Attendo",
      image: "/kunder/Attendo.jpeg",
    },
    {
      name: "Forenede",
      image: "/kunder/forenede.png",
    },
    {
      name: "Iocum",
      image: "/kunder/iocum.svg",
    },
    {
      name: "Silverhemmen",
      image: "/kunder/silverhemmen.png",
    },
    {
      name: "Stockholm Stad",
      image: "/kunder/sthlm-stad.png",
    },
    {
      name: "Vardaga",
      image: "/kunder/vardaga.png",
    },
  ];
  const reviews = [
    {
      qoute: "Mycket snabba handläggningar och lätta att få kontakt med.",
      name: "Gasha Salar",
      position: "Biträdande verksamhetschef",
    },
    {
      qoute: "Professionellt bemanningsföretag och bra samarbete.",
      name: "Nino Mullic",
      position: "VD, Hammarbygruppen AB",
    },
    {
      qoute: "Bra samarbete och fint bemötande",
      name: "Tania Bolevin",
      position: "Verksamhetschef, Blomsterfonden",
    },
    {
      qoute: "Ett seriöst företag med fint bemötande",
      name: "Michaela Lupu",
      position: "SSK",
    },
  ];
  useEffect(() => {
    //console.log("References: " + inView);
    if (inView) {
      setActiveLink("Referenser");
    }
  }, [inView, setActiveLink]);

  return (
    <section className=" bg-slate-50 py-8">
      <div
        id="references"
        className=" sr-only self-center relative -top-24"
      ></div>
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 text-xl">
          Vad våra kunder tycker
        </p>
        <div
          className={`px-4 md:px-10 overflow-hidden flex flex-col max-w-[22rem] md:max-w-full items-start justify-evenly space-y-10 md:space-y-0 md:grid md:grid-cols-8 md:grid-rows-2 md:gap-x-20 xl:gap-x-28 md:gap-y-14 my-20 text-lg`}
        >
          <motion.div
            ref={ref}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            className=" md:col-span-4 "
          >
            <Card className=" rounded-lg p-5 sm:max-w-full md:w-fit h-full md:h-[180px] flex flex-col justify-between bg-gradient-to-t from-teal-400 to-teal-200 shadow-gray-200 text-black">
              <CardContent className=" p-0 mb-5">
                <BQM>{reviews[0].qoute}</BQM>
              </CardContent>
              <div>
                <CardTitle>{reviews[0].name}</CardTitle>
                <CardDescription className="text-slate-800">
                  {reviews[0].position}
                </CardDescription>
              </div>
            </Card>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            className="md:col-span-4"
          >
            <Card className="rounded-lg p-5 md:w-fit h-full md:min-h-[152px] flex flex-col justify-between bg-gradient-to-bl from-teal-400 to-teal-200 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                <BQM>{reviews[1].qoute}</BQM>
              </CardContent>
              <div>
                <CardTitle>{reviews[1].name}</CardTitle>
                <CardDescription className="text-slate-800">
                  {reviews[1].position}
                </CardDescription>
              </div>
            </Card>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Card className="rounded-lg p-5 flex flex-col justify-between bg-gradient-to-br from-teal-400 to-teal-200 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                <BQM>{reviews[2].qoute}</BQM>
              </CardContent>
              <CardTitle>{reviews[2].name}</CardTitle>
              <CardDescription className="text-slate-800">
                {reviews[2].position}
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            className="md:col-span-3 md:col-start-5"
          >
            <Card className="rounded-lg p-5 flex flex-col justify-between bg-gradient-to-tl from-teal-400 to-teal-200 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                <BQM>{reviews[3].qoute}</BQM>
              </CardContent>
              <CardTitle>{reviews[3].name}</CardTitle>
              <CardDescription className="text-slate-800">
                {reviews[3].position}
              </CardDescription>
            </Card>
          </motion.div>
        </div>
        {/* <InfiniteMovingLogos
          items={clients}
          direction="right"
          pauseOnHover={false}
          sideGradientOn={false}
        /> */}
        <LogoCarousel items={clients} />
      </div>
    </section>
  );
}

export default References;

function BQM({ children }: { children: ReactNode }) {
  /*Bold Qoutation Marks, lol */
  return (
    <>
      <b className=" text-2xl font-serif">“</b>
      {children}
      <b className=" text-2xl font-serif">”</b>
    </>
  );
}
