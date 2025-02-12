import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { InfiniteMovingLogos } from "./infinite-moving-logos";
import * as motion from "motion/react-client";
import { useNavlinkContext } from "@/context/navlink-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function References() {
  const { ref, inView } = useInView();
  const { setActiveLink } = useNavlinkContext();
  const clients = [
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
    {
      name: "Region Stockholm",
      image: "/region-sthlm.png",
    },
  ];
  const reviews = [
    {
      qoute: "“Mycket snabba handläggningar och lätta att få kontakt med.”",
      name: "Gasha Salar",
      position: "Biträdande verksamhetschef",
    },
    {
      qoute: "“Professionellt bemanningsföretag och bra samarbete.”",
      name: "Nino Mullic",
      position: "VD, Hammarbygruppen AB",
    },
    {
      qoute: "“Bra samarbete och fint bemötande”",
      name: "Tania Bolevin",
      position: "Verksamhetschef, Blomsterfonden",
    },
    {
      qoute: "“Ett seriöst företag med fint bemötande”",
      name: "Michaela Lupu",
      position: "SSK",
    },
  ];
  useEffect(() => {
    console.log("References: " + inView);
    if (inView) {
      setActiveLink("Referenser");
    }
  }, [inView]);

  return (
    <section className=" max-w-7xl bg-slate-50 py-8">
      <div
        id="references"
        className=" sr-only self-center relative -top-24"
      ></div>
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 text-xl">
          Vad våra kunder tycker
        </p>
        <div className=" overflow-hidden flex flex-col items-start justify-evenly space-y-12 md:space-y-0 md:grid md:grid-cols-8 md:grid-rows-2 md:gap-x-20 md:gap-y-10 my-20 text-lg">
          <motion.div
            ref={ref}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="self-start md:col-span-4 "
          >
            <Card className="p-5 sm:w-[300px] sm:max-w-full max-w-[290px] md:w-fit h-[180px] flex flex-col justify-between bg-gradient-to-t from-teal-500 to-teal-100 shadow-gray-200 text-black">
              <CardContent className=" p-0 mb-5">
                {reviews[0].qoute}
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
            transition={{ duration: 1, delay: 0.3 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <Card className="p-5 sm:w-[370px] sm:max-w-full max-w-[350px] self-end md:self-start md:w-fit md:h-[152px] flex flex-col justify-between bg-gradient-to-bl from-teal-500 to-teal-100 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                {reviews[1].qoute}
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
            transition={{ duration: 1, delay: 0.5 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="self-center md:col-span-3"
          >
            <Card className="p-5 flex flex-col justify-between bg-gradient-to-br from-teal-500 to-teal-100 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                {reviews[2].qoute}
              </CardContent>
              <CardTitle>{reviews[2].name}</CardTitle>
              <CardDescription className="text-slate-800">
                {reviews[2].position}
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div
            transition={{ duration: 1, delay: 0.4 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:col-start-5"
          >
            <Card className="p-5 flex flex-col justify-between bg-gradient-to-tl from-teal-500 to-teal-100 shadow-gray-200">
              <CardContent className=" p-0 mb-5">
                {reviews[3].qoute}
              </CardContent>
              <CardTitle>{reviews[3].name}</CardTitle>
              <CardDescription className="text-slate-800">
                {reviews[3].position}
              </CardDescription>
            </Card>
          </motion.div>
        </div>
        <InfiniteMovingLogos
          items={clients}
          direction="right"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}

export default References;
