"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const organization = formData.get("organization") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phone) {
    return { success: false, message: "Faltan campos obligatorios" };
  }

  // Validate environment variables
  const mailHost = process.env.MAIL_HOST || 'smtp.gmail.com';
  const mailPort = process.env.MAIL_PORT || '587';
  const mailUsername = process.env.MAIL_USERNAME || 'jcornejo@proscom.cl';
  const mailPassword = process.env.MAIL_PASSWORD || 'dzrj lqwm dakj jpfg';

  console.log("SMTP Configuration:", {
    host: mailHost,
    port: mailPort,
    user: mailUsername ? "***" : "NOT SET",
    pass: mailPassword ? "***" : "NOT SET",
    envHost: process.env.MAIL_HOST ? "SET" : "NOT SET",
    envUser: process.env.MAIL_USERNAME ? "SET" : "NOT SET"
  });

  // Gmail SMTP configuration
  const transporter = nodemailer.createTransport({
    host: mailHost,
    port: parseInt(mailPort),
    secure: false, // Use STARTTLS for port 587
    auth: {
      user: mailUsername,
      pass: mailPassword,
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  try {
    // Verify connection configuration
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Proscom'}" <${mailUsername}>`,
      to: "jcornejo@proscom.cl",
      subject: `Nueva solicitud de demo: ${organization}`,
      text: `
        Nueva solicitud de demo recibida.

        Nombre: ${name}
        Organización: ${organization}
        Correo: ${email}
        Teléfono: ${phone}
        Servicio de interés: ${service}
        Mensaje: ${message}
      `,
      html: `
        <h2>Nueva solicitud de demo recibida</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Organización:</strong> ${organization}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio de interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong> <br/>${message || 'Sin mensaje'}</p>
      `,
    });

    console.log("Email sent successfully:", info.messageId);
    return { success: true, message: "¡Solicitud enviada exitosamente! Nos pondremos en contacto pronto." };
  } catch (error) {
    console.error("Error sending email:", error);
    // Log more details for debugging
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
    }
    return { 
      success: false, 
      message: "No pudimos enviar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente." 
    };
  }
}
