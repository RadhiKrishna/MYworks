"use client";

import { useState } from "react";
import { serviceOptions, site } from "@/lib/site-data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    // No backend is wired up yet (see README "Wiring up the contact form"),
    // so this opens a pre-filled email instead of pretending the message
    // was sent to a server. Swap this for a real fetch() call once an API
    // route or form service is connected.
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  if (status === "opened") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-gold/40 bg-cloud2 p-8 text-center"
      >
        <p className="font-display text-xl text-slate">
          Your email app should open now.
        </p>
        <p className="text-slate2 text-sm mt-2">
          If it didn&apos;t, email us directly at {site.email}.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex mt-5 text-sm text-gold hover:text-gold2 transition-colors"
        >
          Email {site.email} →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-mono text-slate2 uppercase tracking-wide mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-cloud2 border border-line2 rounded-md px-4 py-3 text-sm text-slate focus-ring"
        >
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono text-slate2 uppercase tracking-wide mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-cloud2 border border-line2 rounded-md px-4 py-3 text-sm text-slate placeholder:text-slate2/60 focus-ring resize-none"
          placeholder="Tell us about your project or requirement..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-ink text-cloud font-medium text-sm rounded-md px-6 py-3.5 hover:bg-panel transition-colors focus-ring"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono text-slate2 uppercase tracking-wide mb-2">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="w-full bg-cloud2 border border-line2 rounded-md px-4 py-3 text-sm text-slate placeholder:text-slate2/60 focus-ring"
      />
    </div>
  );
}
