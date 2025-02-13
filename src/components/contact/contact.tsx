"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";
import Form from "next/form";
import { sendEmail } from "@/actions/contactAction";
import { ActionResponse } from "@/types/mail";
import { useToast } from "@/hooks/use-toast";
import { useNavlinkContext } from "@/context/navlink-context";
import { useInView } from "react-intersection-observer";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveLink } = useNavlinkContext();
  const { toast } = useToast();
  const [state, action, isPending] = useActionState(sendEmail, initialState);
  useEffect(() => {
    if (state.success) {
      toast({
        title: "Tack!",
        description: "Ditt meddelande har skickats",
      });
    }
  }, [state, toast]);

  useEffect(() => {
    console.log("Contact: " + inView);
    if (inView) {
      setActiveLink("Kontakt");
    }
  }, [inView]);

  return (
    <section className=" h-screen sm:h-full max-w-7xl bg-slate-100 py-8">
      <div id="contact" className=" sr-only self-center relative -top-24"></div>
      <div className="flex flex-col items-center justify-center px-10">
        <p className=" self-start my-5 p-2 px-4 text-2xl">Kontakta oss</p>
        <Form
          ref={ref}
          action={action}
          className="self-start flex flex-col space-y-5 sm:max-w-80 w-full"
        >
          <TextField
            defaultValue={state.inputs?.name}
            error={
              state.errors?.name !== undefined
                ? state.success
                  ? false
                  : true
                : false
            }
            helperText={state.errors?.name}
            type="text"
            id="name"
            name="name"
            label="Namn"
          />
          <TextField
            defaultValue={state.inputs?.email}
            error={
              state.errors?.email !== undefined
                ? state.success
                  ? false
                  : true
                : false
            }
            helperText={state.errors?.email}
            id="email"
            name="email"
            label="E-post"
            variant="outlined"
          />
          <TextField
            defaultValue={state?.inputs?.number}
            error={
              state.errors?.number ? (state.success ? false : true) : false
            }
            helperText={state.errors?.number}
            type="number"
            id="number"
            name="number"
            label="Nummer"
            variant="outlined"
          />
          <TextField
            defaultValue={state.inputs?.message}
            error={
              state.errors?.message !== undefined
                ? state.success
                  ? false
                  : true
                : false
            }
            helperText={state.errors?.message}
            placeholder="Skriv ditt meddelande här"
            multiline
            rows={5}
            type="text"
            id="message"
            name="message"
            label="Meddelande"
            variant="outlined"
          />
          <Button
            type="submit"
            size={"default"}
            className=" text-xl bg-teal-600 hover:bg-teal-700 max-w-32"
            disabled={isPending}
          >
            {isPending ? "Vänta" : "Skicka"}
          </Button>
        </Form>
      </div>
    </section>
  );
}
