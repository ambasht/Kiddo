import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { email, printable } = body;

    console.log(email);
    console.log(printable);

    await fetch(
      process.env.GOOGLE_SCRIPT_URL!,
      {
        method: "POST",

        body: JSON.stringify({
          email,
          printable: printable.title,
        }),
      }
    );

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: email,

      subject:
        "Your Kiddo Printable is Ready 🎨",

      html: `
        <h2>Your printable is ready ✨</h2>

        <a href="${printable.pdf}">
          Download PDF
        </a>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
      error,
    });
  }
}