import { Resend } from "resend";

import { EmailTemplate } from "@/contact/email_template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const sendEmailTo = process.env.RESEND_EMAIL_SEND_TO || "";
    const _body = await request.text();
    const body = JSON.parse(_body);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [sendEmailTo],
      subject: "Someone sent you a message from portfolio website",
      react: await EmailTemplate({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
