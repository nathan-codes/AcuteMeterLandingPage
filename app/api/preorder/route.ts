import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nathan@acutemeter.com",
      subject: "New AcuteMeter Pre-order",
      html: `
        <h2>New Pre-order Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Usage Type:</strong> ${data.usage}</p>
        <p><strong>Quantity:</strong> ${data.quantity}</p>
        ${
          data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""
        }
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing pre-order:", error);
    return NextResponse.json(
      { error: "Failed to process pre-order" },
      { status: 500 }
    );
  }
}
