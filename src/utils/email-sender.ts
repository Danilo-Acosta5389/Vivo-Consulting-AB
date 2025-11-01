"use server";

import { SendEmailDTO } from "@/types/mail";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const name = "Vivo Nurse";

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
    address: String(process.env.OWNER1),
  },
  {
    name: name,
    address: String(process.env.OWNER2),
  },
];

export default async function emailSender(dto: SendEmailDTO) {
  try {
    // Email to owner of site
    await transporter.sendMail({
      from: sender,
      to: recipients,
      subject: "Meddelande från Vivo Nurse",
      text: dto.message,
      html: `
      <body style="">
      <h3>Ett meddelande har skickats från Vivo Nurse</h3>
      <h4>Personens uppgifter</h4>
      <p>Namn: ${dto.name}</p>
      <p>E-post: ${dto.email}</p>
      <p>Telefonnr: ${dto.number}</p>
      <h4>Meddelande:</h4>
      <p style="max-width:500px;">${dto.message}</p>
      </body>`.trim(),
    });

    // Email to sender
    await transporter.sendMail({
      from: sender,
      to: dto.email,
      subject: "Tack för ditt meddelande",
      text: "Vi har mottagit ditt meddelande och återkommer så snart vi kan",
      html: `
      <body
    style="background-color: rgb(248, 248, 248); max-width: 450px; width: full; padding-bottom:1px;"
  >
    <img src="https://vivonurse.se/images/uploads/vivo-logo.png"
     alt="Vivo Consulting Logo" 
     width="200" 
     height="61" 
     style="display: block; margin: 0 auto; padding:20px"/>
    <div
      style="
        width: 85%;
        border: 1px solid rgb(219, 219, 219);
        margin-right: auto;
        margin-left: auto;
        display: block;
      "
    ></div>
    <div
      style="
        margin: 20px;
        display: block;
        font-family: helvetica;
        font-weight: bold;
        color: rgb(7, 7, 7);
      "
    >
      <h3>Hej, ${dto.name}</h3>
      <p style="font-size: medium; font-weight: normal">
        Tack för ditt meddelande. <br />Du kommer att få ett svar från oss inom
        1-3 dagar. <br /><br />Varma hälsningar<span style="font-weight: bolder"
          >,<br />
          Vivo Nurse</span
        >
      </p>
      <div style="margin-top: 2rem">
        <div style="margin-bottom:5px;">Angivna uppgifter</div>
        <div
          style="
            margin-top: 0.5rem;
            margin:auto;
            padding: 10px;
            min-height: 200px;
            background-color: rgb(233, 233, 233);
          "
        >
            <div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">Namn</span> <br />
              <span style="font-weight: lighter">${dto.name}</span>
            </div>
            <div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">E-post</span> <br />
              <span style="font-weight: lighter">${dto.email}</span>
            </div>
            ${
              dto.number && dto.number.length > 0
                ? `<div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">Telefonnummer</span> <br />
              <span style="font-weight: lighter">${dto.number}</span>
            </div>`
                : ""
            }
            <div style="margin-bottom: 0.5rem;">
              <div style="font-weight: bold; margin-bottom:5px;">Meddelande</div>
              <span style="font-weight: lighter; line-break:normal;">${
                dto.message
              }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
