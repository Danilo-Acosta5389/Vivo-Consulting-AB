import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  //console.log("Request:", request);
  const { token } = body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );

  const verification = await verificationResponse.json();
  //console.log("VERIFICATION:", verification);
  if (verification.success && verification.score > 0.5) {
    return NextResponse.json({
      success: true,
      score: verification.score,
    });
  } else {
    return NextResponse.json({
      success: false,
      score: verification.score,
      errorCodes: verification["error-codes"],
    });
  }
}
