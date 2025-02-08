import Image from "next/image";

export default function About() {
  const sellingPoints = [
    {
      title: "Erfarenhet du kan lita på",
      description:
        "Med över 15 års erfarenhet inom vården säkerställer vi kvalitet och kompetens i varje uppdrag.",
    },
    {
      title: "Flexibla bemanningslösningar",
      description:
        "Vi erbjuder skräddarsydda tjänster, både direkt till verksamheter och via bemanningsföretag.",
    },
    {
      title: "Patienten i fokus",
      description:
        "Vår verksamhet bygger på trygghet, kontinuitet och en genuin omtanke om varje patient.",
    },
  ];

  return (
    <section className="flex flex-col bg-slate-100">
      <div id="about" className=" sr-only self-center relative -top-16"></div>
      <div className=" flex flex-col items-center justify-center">
        <p className=" border border-black rounded-md p-2 px-4 lg:my-8 mt-8 text-xl">
          Varför välja oss?
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between lg:p-10 mb-5">
        <div className="flex flex-col items-start justify-start max-w-md px-8">
          {sellingPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start py-5"
            >
              <h2 className="text-2xl font-bold">{point.title}</h2>
              <p className="text-lg">{point.description}</p>
            </div>
          ))}
        </div>
        <Image
          src="/nurses.jpeg"
          alt="Image of nurses"
          width={500}
          height={500}
          className="opacity-90 lg:my-0 my-10"
        />
      </div>
    </section>
  );
}
