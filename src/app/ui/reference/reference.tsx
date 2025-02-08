import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

function References() {
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
        <div className=" flex flex-col items-start justify-evenly space-y-12 md:space-y-0 md:grid md:grid-cols-8 md:grid-rows-2 md:gap-x-20 md:gap-y-10 my-20 text-lg">
          {/* {reviews.map((rev, index) => (
            <Card
              key={index}
              className={`p-5 ${
                index === 0 || index === 1 ? "col-span-4" : "col-span-2"
              }`}
            >
              <CardContent className=" p-0 mb-5">{rev.qoute}</CardContent>
              <CardTitle>{rev.name}</CardTitle>
              <CardDescription>{rev.position}</CardDescription>
            </Card>
          ))} */}
          <Card className="p-5 self-start md:col-span-4 sm:w-[300px] sm:max-w-full max-w-[290px] md:w-fit h-[180px] flex flex-col justify-between bg-teal-400 shadow-gray-200">
            <CardContent className=" p-0 mb-5">{reviews[0].qoute}</CardContent>
            <div>
              <CardTitle>{reviews[0].name}</CardTitle>
              <CardDescription>{reviews[0].position}</CardDescription>
            </div>
          </Card>
          <Card className="p-5 sm:w-[370px] sm:max-w-full max-w-[350px] self-end md:w-fit md:col-span-4 md:h-[152px] flex flex-col justify-between bg-teal-400 shadow-gray-200">
            <CardContent className=" p-0 mb-5">{reviews[1].qoute}</CardContent>
            <CardTitle>{reviews[1].name}</CardTitle>
            <CardDescription>{reviews[1].position}</CardDescription>
          </Card>
          <Card className="p-5 self-center md:col-span-3 flex flex-col justify-between bg-teal-400 shadow-gray-200">
            <CardContent className=" p-0 mb-5">{reviews[2].qoute}</CardContent>
            <CardTitle>{reviews[2].name}</CardTitle>
            <CardDescription>{reviews[2].position}</CardDescription>
          </Card>
          <Card className="p-5 md:col-span-3 md:col-start-5 flex flex-col justify-between bg-teal-400 shadow-gray-200">
            <CardContent className=" p-0 mb-5">{reviews[3].qoute}</CardContent>
            <CardTitle>{reviews[3].name}</CardTitle>
            <CardDescription>{reviews[3].position}</CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default References;
