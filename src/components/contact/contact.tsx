"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TextField from "@mui/material/TextField";
import Form from "next/form";
import { sendEmail } from "@/actions/contactAction";
import { ActionResponse, ContactFormData } from "@/types/mail";
import { useToast } from "@/hooks/use-toast";
import { useNavlinkContext } from "@/context/navlink-context";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#292a2b",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#282829",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#22262a",
    },
  },
});

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveLink } = useNavlinkContext();
  const { toast } = useToast();
  const [state, action, isPending] = useActionState(submitAction, initialState);
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function submitAction(
    prevState: ActionResponse | null,
    formData: FormData
  ): Promise<ActionResponse> {
    const rawData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      number: formData.get("number") as string,
      message: formData.get("message") as string,
    };

    try {
      if (!executeRecaptcha) {
        return initialState;
      }

      const token = await executeRecaptcha("form_submit");
      //console.log("Token:", token);
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      if (!data.success) {
        console.log("An error ocurred when virefying with reCAPTCHA");
        toast({
          variant: "destructive",
          title: "Ett problem uppstod",
          description:
            "Ditt meddelande har inte skickats. Vänligen försök igen senare.",
        });
        return {
          success: false,
          message: "Något gick fel",
          inputs: rawData,
        };
      } else {
        return await sendEmail(prevState, formData);
      }
    } catch (err) {
      console.log("ERROR FROM RECAPTCHA CATCH BLOCK:", err);
      return {
        success: false,
        message: "Något gick fel",
        inputs: rawData,
      };
    }
  }

  useEffect(() => {
    if (state.success) {
      console.log("SUCCESSS");
      toast({
        title: "Tack!",
        description: "Ditt meddelande har skickats",
      });
    }
  }, [state, toast]);

  useEffect(() => {
    //console.log("Contact: " + inView);
    if (inView) {
      setActiveLink("Kontakt");
    }
  }, [inView, setActiveLink]);

  return (
    <section className=" h-screen sm:h-full max-w-7xl bg-slate-100 py-8">
      <div id="contact" className=" sr-only self-center relative -top-24"></div>
      <div className="flex flex-col items-center justify-center px-10">
        <p className=" self-start my-5 p-2 px-4 text-2xl">Kontakta oss</p>
        <Form
          ref={ref}
          action={action}
          className="self-start flex flex-col space-y-5 sm:max-w-80 w-full pb-10"
        >
          <CustomTextField
            disabled={isPending}
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
            label="Namn*"
            className="border-black border-8"
          />
          <CustomTextField
            disabled={isPending}
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
            label="E-post*"
            variant="outlined"
          />
          <CustomTextField
            disabled={isPending}
            defaultValue={state?.inputs?.number}
            error={
              state.errors?.number ? (state.success ? false : true) : false
            }
            helperText={state.errors?.number}
            type="number"
            id="number"
            name="number"
            label="Telefonnummer*"
            variant="outlined"
          />
          <CustomTextField
            disabled={isPending}
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
            label="Meddelande*"
            variant="outlined"
          />
          <div className="text-sm">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              className=" underline text-blue-700"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className=" underline text-blue-700"
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </a>{" "}
            apply.
          </div>
          <Button
            type="submit"
            size={"default"}
            className=" text-xl bg-teal-600 hover:bg-teal-700 max-w-fit"
            disabled={isPending}
          >
            {isPending ? "Vänta" : "Skicka meddelande"}
          </Button>
        </Form>
      </div>
    </section>
  );
}
