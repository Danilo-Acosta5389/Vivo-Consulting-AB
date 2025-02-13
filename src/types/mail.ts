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
    .string({ message: "Får inte lämnas tomt" })
    .min(2, "Minst 2 tecken")
    .max(50, "Får vara högst 50 tecken"),
  email: z
    .string({ message: "Får inte lämnas tomt" })
    .email("Var god ange e-post")
    .min(5, "Får inte vara kortare än 5 tecken")
    .max(100, "Får inte vara längre än 100 tecken"),
  number: z
    .string({ message: "Fel inmatning" })
    .min(4, "Får inte vara kortare än 4 tecken")
    .max(20, "Får inte vara längre än 20 tecken"),
  message: z
    .string({ message: "Får inte lämnas tomt" })
    .min(2, "Ange minst två tecken")
    .max(300, "Får inte vara längre än 300 tecken"),
});
