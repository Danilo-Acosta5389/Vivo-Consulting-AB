"use client";

import ItemViewer from "./item-viewer";

const CompetenceDesktop = ({ className }: { className?: string }) => {
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
    <section
      className={
        " max-w-7xl w-full hidden md:flex flex-col items-center justify-center bg-slate-100 py-10 pb-20 " +
        className
      }
    >
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 mb-14 text-xl">
          Kompetenser
        </p>
      </div>
      <span className="self-start pl-8 text-2xl pb-3">Verktyg</span>
      <ItemViewer items={skills} />
      <span className="self-start pl-8 pt-10 pb-3 text-2xl">
        Kvalitetsregister
      </span>
      <ItemViewer items={qualities.trim().split(",")} />
    </section>
  );
};

export default CompetenceDesktop;
