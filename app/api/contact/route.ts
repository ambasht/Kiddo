export async function POST(req: Request) {
  const body = await req.json();

  await fetch(process.env.GOOGLE_SCRIPT_URL_CONTACT!, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return Response.json({
    success: true,
  });
}