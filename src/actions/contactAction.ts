"use server";
//Hellooo there! This is a server action for sending emails from a contact form.
import { z } from "zod";
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

    const getEmailErrorMessage = (
      errors: z.ZodError["issues"] | undefined
    ): string[] | undefined => {
      if (!errors?.length) return undefined;

      // Find email-specific errors
      const emailErrors = errors.filter((error) => error.path[0] === "email");
      // Prioritize empty field error over email format error
      const emptyFieldError = emailErrors.find(
        (error) => error.code === "too_small"
      );
      if (emptyFieldError) return [emptyFieldError.message];

      // Fallback to email format error
      const emailFormatError = emailErrors.find(
        (error) => error.code === "invalid_string"
      );
      return emailFormatError?.message ? [emailFormatError.message] : undefined;
    };

    if (!validatedData.success) {
      //Send validatedData with correct email error

      //Get correct email error message
      const emailError = getEmailErrorMessage(validatedData.error.errors);
      //Put errors in a const
      const valDatErr = validatedData.error.flatten().fieldErrors;
      //Remove all errors trying to be sent
      valDatErr.email?.splice(0, valDatErr.email.length);
      //Push correct email error message to validatedData errors
      if (emailError) {
        valDatErr.email?.push(emailError[0]);
      }
      console.log(valDatErr);

      return {
        success: false,
        message: "Var god fyll i hela formuläret",
        errors: valDatErr,
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
