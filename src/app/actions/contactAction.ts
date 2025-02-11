"use server";

import { number, z } from "zod";
import type { ActionResponse, ContactFormData } from "../types/mail";

const mailSchema = z.object({
  name: z.string({ message: "Får inte lämnas tomt" }).min(2, "Minst 2 tecken"),
  email: z
    .string({ message: "Får inte lämnas tomt" })
    .email("Var god ange e-post"),
  number: z
    .number({ message: "Fel inmatning" })
    .min(1234, "Får inte vara kortare än 4 nummer")
    .max(12345678901234567890, "Får inte vara längre än 20 nummer"),
  message: z
    .string({ message: "Får inte lämnas tomt" })
    .min(2, "Ange minst två tecken"),
});

export async function sendEmail(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      number: Number(formData.get("number")),
      message: formData.get("message") as string,
    };

    const validatedData = mailSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Var god fyll i hela formuläret",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    console.log("Email submitted: ", validatedData.data);

    return {
      success: true,
      message: "Meddelande skickad!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Något gick fel",
    };
  }
}
