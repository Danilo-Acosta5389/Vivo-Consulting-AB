import { z } from "zod";

export interface ContactFormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: ContactFormData;
}

export type SendEmailDTO = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export const mailSchema = z.object({
  name: z
    .string({ message: "Var god ange namn" })
    .min(1, "Var god ange namn")
    .max(50, "Får vara högst 50 tecken"),
  email: z
    .string({ message: "Var god ange e-postadress" })
    .email("Var god ange e-postadress")
    .max(100, "Får inte vara längre än 100 tecken"),
  number: z
    .string({ message: "Var god ange telefonnummer" })
    .max(20, "Får inte vara längre än 20 tecken"),
  message: z
    .string({ message: "Var god ange ett meddelande" })
    .min(1, "Var god ange ett meddelande")
    .max(300, "Får inte vara längre än 300 tecken"),
});
