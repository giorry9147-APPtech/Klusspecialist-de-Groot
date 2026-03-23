import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Vul een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    // Temporary server-side handling: log request details.
    // Replace with SMTP or CRM integration in production.
    console.info("[CONTACTFORMULIER]", {
      firstName,
      lastName,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Bedankt voor uw bericht. We nemen snel contact met u op.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
