"use server";

import {
  mailSchema,
  type ActionResponse,
  type ContactFormData,
  type SendEmailDTO,
} from "../types/mail";
import emailSender from "@/utils/email-sender";

export async function sendEmail(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      number: formData.get("number") as string,
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

    const emailDetails: SendEmailDTO = {
      name: validatedData.data.name,
      email: validatedData.data.email,
      message: validatedData.data.message,
      number: validatedData.data.number,
    };

    const result = await emailSender(emailDetails);
    console.log("Success");
    console.log(result);

    return {
      success: true,
      message: "Meddelande skickad!",
    };
  } catch {
    return {
      success: false,
      message: "Något gick fel",
    };
  }
}
