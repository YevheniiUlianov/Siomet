"use client";

import { useState, type FormEvent } from "react";
import RisingLines from "@/components/originkit/ui/risinglines";
import { SectionLabel } from "@/components/ui/section-label";

type ContactField = "name" | "email" | "message";

const initialValues = { name: "", email: "", message: "" };

export function CtaSection() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const getError = (field: ContactField) => {
    const value = values[field].trim();
    if (!value) return "Dieses Feld ist erforderlich.";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    return "";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setIsReady(false);

    if (getError("name") || getError("email") || getError("message")) return;
    setIsReady(true);
  };

  const updateField = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setIsReady(false);
  };

  const fieldClassName = (field: ContactField) =>
    `w-full rounded-[8px] border bg-black px-4 text-sm text-white placeholder:text-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 ${
      (touched[field] || submitted) && getError(field)
        ? "border-red-400/70 focus:border-red-300"
        : "border-white/15 hover:border-white/30 focus:border-white/50"
    }`;

  return (
    <section id="loslegen" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[calc(100%-2rem)] max-w-[1344px] -translate-x-1/2 overflow-hidden opacity-60 lg:w-[calc(100%-3.5rem)]"
      >
        <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
          <RisingLines
            className="size-full"
            particles={180}
            color="#e4e4e7"
            riseSpeed={12}
            opacity={42}
            scale={8}
            showHorizon
            horizonColor="#a1a1aa"
            horizonOpacity={22}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel>Kontakt</SectionLabel>
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">Kontaktieren Sie</span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">unser Team.</span>
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)] lg:col-span-8">
              <form
                aria-label="Kontaktformular"
                noValidate
                onSubmit={handleSubmit}
                className="relative space-y-6 rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:p-8 lg:p-10"
              >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-200">Name</label>
              <input
                autoComplete="name"
                className={`${fieldClassName("name")} h-12`}
                id="contact-name"
                name="name"
                onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                onChange={(event) => updateField("name", event.target.value)}
                required
                aria-invalid={Boolean((touched.name || submitted) && getError("name"))}
                aria-describedby={(touched.name || submitted) && getError("name") ? "contact-name-error" : undefined}
                value={values.name}
              />
              {(touched.name || submitted) && getError("name") && (
                <p className="mt-2 text-xs text-red-300" id="contact-name-error">{getError("name")}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-200">Email</label>
              <input
                autoComplete="email"
                className={`${fieldClassName("email")} h-12`}
                id="contact-email"
                name="email"
                onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                onChange={(event) => updateField("email", event.target.value)}
                required
                type="email"
                aria-invalid={Boolean((touched.email || submitted) && getError("email"))}
                aria-describedby={(touched.email || submitted) && getError("email") ? "contact-email-error" : undefined}
                value={values.email}
              />
              {(touched.email || submitted) && getError("email") && (
                <p className="mt-2 text-xs text-red-300" id="contact-email-error">{getError("email")}</p>
              )}
            </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-zinc-200">Message</label>
              <textarea
                className={`${fieldClassName("message")} min-h-36 resize-y py-3`}
                id="contact-message"
                name="message"
                onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                onChange={(event) => updateField("message", event.target.value)}
                required
                aria-invalid={Boolean((touched.message || submitted) && getError("message"))}
                aria-describedby={(touched.message || submitted) && getError("message") ? "contact-message-error" : undefined}
                value={values.message}
              />
              {(touched.message || submitted) && getError("message") && (
                <p className="mt-2 text-xs text-red-300" id="contact-message-error">{getError("message")}</p>
              )}
            </div>

            <button
              className="h-10 w-full rounded-full border border-white/30 bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-fit"
              type="submit"
            >
              Absenden
            </button>
            <p aria-live="polite" className={`text-sm ${isReady ? "text-zinc-300" : "sr-only"}`}>
              Formular geprüft. Der Versand wird nach Anbindung des Empfängers aktiviert.
            </p>
              </form>
              <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
