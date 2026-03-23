"use client";

import { FormEvent, useState } from "react";

type SubmitState = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "loading", message: "Bericht wordt verzonden..." });

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setSubmitState({
          type: "error",
          message: result.error || "Er ging iets mis. Probeer het opnieuw.",
        });
        return;
      }

      setSubmitState({
        type: "success",
        message: result.message || "Uw bericht is verstuurd.",
      });
      event.currentTarget.reset();
    } catch {
      setSubmitState({
        type: "error",
        message: "Netwerkfout. Controleer uw verbinding en probeer opnieuw.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-gray-700">
          Voornaam *
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="text"
            name="firstName"
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Achternaam *
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="text"
            name="lastName"
            required
          />
        </label>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-gray-700">
          E-mailadres *
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Telefoonnummer
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="tel"
            name="phone"
          />
        </label>
      </div>
      <label className="mt-6 block text-sm font-medium text-gray-700">
        Omschrijving van uw klus *
        <textarea
          className="mt-2 min-h-40 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
          name="message"
          required
        />
      </label>

      <button
        type="submit"
        className="btn-primary mt-6"
        disabled={submitState.type === "loading"}
      >
        {submitState.type === "loading" ? "Bezig met verzenden..." : "Verstuur bericht"}
      </button>

      {submitState.type !== "idle" ? (
        <p
          className={`mt-4 text-sm ${
            submitState.type === "success" ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
