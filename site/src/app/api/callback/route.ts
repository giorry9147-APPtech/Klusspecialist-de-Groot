import { NextResponse } from "next/server";

type CallbackPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  date?: string;
  timePreference?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CallbackPayload;

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const phone = (body.phone || "").trim();
    const date = (body.date || "").trim();
    const timePreference = (body.timePreference || "").trim();
    const message = (body.message || "").trim();

    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { success: false, error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    // Temporary server-side handling: log request details.
    // Replace with SMTP or CRM integration in production.
    console.info("[TERUGBELAFSPRAAK]", {
      firstName,
      lastName,
      phone,
      date,
      timePreference,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Uw terugbelafspraak is ontvangen. We bellen u op het gekozen moment.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
