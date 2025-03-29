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
  name: z.string().min(1, "Ange namn").max(50, "Får vara högst 50 tecken"),
  email: z
    .string()
    .email({ message: "Ange giltig e-postadress" })
    .min(1, "Ange e-postadress")
    .max(100, "Får inte vara längre än 100 tecken")
    .trim(),
  number: z
    .string({ message: "Ange telefonnummer" })
    .max(20, "Får inte vara längre än 20 tecken"),
  message: z
    .string()
    .min(1, "Ange ett meddelande")
    .max(300, "Får inte vara längre än 300 tecken"),
});
