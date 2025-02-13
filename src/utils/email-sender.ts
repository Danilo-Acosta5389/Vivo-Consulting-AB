"use server";

import { SendEmailDTO } from "@/types/mail";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const name = "no reply";

const sender: Mail.Address = {
  name: name,
  address: String(process.env.SMTP_USERNAME),
};

const recipients: Mail.Address[] = [
  {
    name: name,
    address: String(process.env.DEVELOPER),
  },
  {
    name: name,
    address: String(process.env.DESIGNER),
  },
  {
    name: name,
    address: String(process.env.CLIENT),
  },
];

export default async function emailSender(dto: SendEmailDTO) {
  try {
    await transporter.sendMail({
      from: sender,
      to: recipients,
      subject: "Meddelande från webbsidan",
      text: dto.message,
      html: `
      <body style="">
      <h2>Detta är ett mejl från vivoconsulting(.)se</h2>
      <p>Namn: ${dto.name}</p>
      <p>E-post: ${dto.email}</p>
      <p>Telefonnr: ${dto.number}</p>
      <h5>Meddelande:</h5>
      <p style="max-width:500px;">${dto.message}</p>
      </body>`.trim(),
    });
    return { success: true, error: null };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
