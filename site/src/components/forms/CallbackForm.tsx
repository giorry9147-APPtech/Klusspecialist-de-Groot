"use client";

import { FormEvent, useState } from "react";

type SubmitState = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function CallbackForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "loading", message: "Aanvraag wordt verzonden..." });

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      phone: String(formData.get("phone") || ""),
      date: String(formData.get("date") || ""),
      timePreference: String(formData.get("timePreference") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/callback", {
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
        message: result.message || "Uw terugbelverzoek is verstuurd.",
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
          Telefoonnummer *
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="tel"
            name="phone"
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Voorkeursdatum
          <input
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
            type="date"
            name="date"
          />
        </label>
      </div>
      <label className="mt-6 block text-sm font-medium text-gray-700">
        Voorkeurstijdstip
        <input
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
          type="text"
          name="timePreference"
          placeholder="Bijv. ochtend, middag of na 17:00"
        />
      </label>
      <label className="mt-6 block text-sm font-medium text-gray-700">
        Korte omschrijving
        <textarea
          className="mt-2 min-h-32 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-navy"
          name="message"
        />
      </label>
      <button
        type="submit"
        className="btn-primary mt-6"
        disabled={submitState.type === "loading"}
      >
        {submitState.type === "loading" ? "Bezig met verzenden..." : "Plan terugbelafspraak"}
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
