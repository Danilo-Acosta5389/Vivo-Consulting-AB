import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <section className=" h-screen max-w-7xl bg-slate-100 py-8">
      <div id="contact" className=" sr-only self-center relative -top-24"></div>
      <div className="flex flex-col items-center justify-center px-10">
        <p className=" self-start my-5 p-2 px-4 text-2xl">Kontakta oss</p>
        <div className="self-start flex flex-col space-y-5">
          <TextField id="outlined-basic" label="Namn" variant="outlined" />
          <TextField id="outlined-basic" label="E-post" variant="outlined" />
          <TextField id="outlined-basic" label="Nummer" variant="outlined" />
          <TextField
            multiline
            rows={5}
            id="outlined-basic"
            label="Meddelande"
            variant="outlined"
          />
          <Button
            size={"default"}
            className=" text-xl bg-teal-600 hover:bg-teal-700 max-w-44"
          >
            Kontakta oss
          </Button>
        </div>
      </div>
    </section>
  );
}
