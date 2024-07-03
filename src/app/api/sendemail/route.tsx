import Otp from "@/app/models/otpModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { name, email, message, phone, work_experience } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "msahil76640@gmail.com",
        pass: "odpizarwxhpxsvqw",
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: "msahil76640@gmail.com",
      subject: `Inquiry from sahil mail`,

      text: "Hello world",
      html: `<b> Name: ${name} <br> Email: ${email} <br> Phone: ${phone} <br> Work Experience: ${work_experience} <br> Message: ${message} </b>`,
    });
    const recipient = await transporter.sendMail({
      from: email,
      to: email,
      subject: `Eduxll`,
      text: "Eduxll",
      html: `<b> We will contact you soon  </b> <br/> <b> contact no :+91 8448 198 656 </b>`,
    });
    console.log("Message sent: %s", recipient.messageId);

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
