"use client";

import { useState } from "react";

const footerLinks: Record<string, Array<{ name: string; href: string; isModal?: boolean }>> = {
  Unternehmen: [
    { name: "Unsere Prinzipien", href: "#how-it-works" },
    { name: "Team", href: "#insights" },
    { name: "Über uns", href: "#pricing" },
    { name: "Produkte", href: "#products" },
    { name: "Projekte", href: "#projects" },
    { name: "Kundengeschichten", href: "#customers" },
  ],
  Rechtliches: [
    { name: "Impressum", href: "#", isModal: true },
    { name: "Datenschutz", href: "#", isModal: true },
    { name: "Cookies", href: "#", isModal: true },
  ],
};

export function FooterSection() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({ necessary: true, analytics: false });

  const acceptAllCookies = () => {
    setCookieSettings({ necessary: true, analytics: true });
    setIsCookiesOpen(false);
  };

  const saveCookieSettings = () => {
    setIsCookiesOpen(false);
  };

  return (
    <footer className="relative bg-black">
      <div className="relative z-10 max-w-[1400px] mx-auto px-[15px] lg:px-14">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-14 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-24">
            {/* Brand Column */}
            <div>
              <a href="#" className="mb-7 inline-flex items-center" aria-label="Siomet home">
                <span className="font-display text-[1.5rem] font-medium tracking-[-0.08em] leading-none text-white">
                  Siomet
                </span>
              </a>

              <div className="mb-7 max-w-[280px] text-sm leading-relaxed text-[lab(47.8726%_0.0583529_5.78918)]">
                Siomet UG (haftungsbeschränkt)
              </div>

              <div className="mb-9 space-y-1 text-sm leading-relaxed text-[lab(47.8726%_0.0583529_5.78918)]">
                <p>Niederstaße 39</p>
                <p>16548 Glienicke/ Nordbahn</p>
                <p>Deutschland</p>
                <p className="pt-3">Telefon: +49 231 99987800</p>
                <p>Fax: +49 231 99987809</p>
                <p>
                  E-Mail: <a href="mailto:info@siomet.de" className="transition-colors hover:text-white">info@siomet.de</a>
                </p>
              </div>

            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 gap-10 sm:gap-14">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="mb-6 text-sm font-medium text-white">{title}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        {link.isModal ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (link.name === "Impressum") {
                                setIsImpressumOpen(true);
                              }
                              if (link.name === "Datenschutz") {
                                setIsPrivacyOpen(true);
                              }
                              if (link.name === "Cookies") {
                                setIsCookiesOpen(true);
                              }
                            }}
                            className="inline-flex items-center gap-2 text-sm text-left text-[lab(47.8726%_0.0583529_5.78918)] transition-colors hover:text-white"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="inline-flex items-center gap-2 text-sm text-[lab(47.8726%_0.0583529_5.78918)] transition-colors hover:text-white"
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isImpressumOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-[2px]"
            onClick={() => setIsImpressumOpen(false)}
          >
            <div
              className="relative w-full max-w-[1180px] overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Impressum"
            >
              <div className="relative rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:p-8 lg:p-10">
                <button
                  type="button"
                  aria-label="Schließen"
                  onClick={() => setIsImpressumOpen(false)}
                  className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/95 text-2xl font-light text-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.3)] transition hover:bg-white"
                >
                  ×
                </button>

                <div className="pr-12 text-white/90">
                  <h2 className="font-display text-[2.3rem] leading-[0.95] tracking-[-0.08em] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                    Impressum
                  </h2>

                  <p className="mt-6 text-[1rem] font-medium text-zinc-300 sm:text-[1.08rem]">
                    Angaben gemäß § 5 TMG
                  </p>

                  <div className="mt-7 space-y-6 sm:space-y-7">
                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        Anbieter
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-zinc-300">Siomet UG (haftungsbeschränkt)</p>
                      <p className="text-base leading-relaxed text-zinc-300">Niederstaße 39</p>
                      <p className="text-base leading-relaxed text-zinc-300">16548 Glienicke/ Nordbahn</p>
                      <p className="text-base leading-relaxed text-zinc-300">Deutschland</p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        Kontakt
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-zinc-300">
                        Telefon: <a href="tel:+4923199987800" className="text-[#7ecbff] underline">+49 231 99987800</a>
                      </p>
                      <p className="text-base leading-relaxed text-zinc-300">
                        E-Mail: <a href="mailto:info@siomet.de" className="text-[#7ecbff] underline">info@siomet.de</a>
                      </p>
                      <p className="text-base leading-relaxed text-zinc-300">
                        Web: <a href="https://siomet.de" className="text-[#7ecbff] underline">siomet.de</a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        Vertretungsberechtigt
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-zinc-300">Vincent Kirchler (Geschäftsführer)</p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        Registereintrag
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-zinc-300">Eintragung im Handelsregister.</p>
                      <p className="text-base leading-relaxed text-zinc-300">Registergericht: Amtsgericht Neuruppin</p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        Streitschlichtung
                      </h3>
                      <p className="mt-3 max-w-[780px] text-base leading-relaxed text-zinc-300">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbelegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-[#7ecbff] underline">ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </section>
                  </div>
                </div>

                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              </div>
            </div>
          </div>
        )}

        {isPrivacyOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-[2px]"
            onClick={() => setIsPrivacyOpen(false)}
          >
            <div
              className="relative w-full max-w-[1180px] overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Datenschutzerklärung"
            >
              <div className="relative rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:p-8 lg:p-10">
                <button
                  type="button"
                  aria-label="Schließen"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/95 text-2xl font-light text-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.3)] transition hover:bg-white"
                >
                  ×
                </button>

                <div className="pr-12 text-white/90">
                  <h2 className="font-display text-[2.3rem] leading-[0.95] tracking-[-0.08em] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                    Datenschutzerklärung
                  </h2>

                  <p className="mt-6 max-w-[980px] text-base leading-relaxed text-zinc-300 sm:text-lg">
                    Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten bei der Nutzung von Praxigate-Website.
                  </p>

                  <div className="mt-8 space-y-7">
                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        1. Verantwortlicher
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-zinc-300">
                        Siomet UG (haftungsbeschränkt), Niederstraße 39, 16548 Glienicke/ Nordbahn, E-Mail: <a href="mailto:info@siomet.de" className="text-[#7ecbff] underline">info@siomet.de</a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        2. Verarbeitung personenbezogener Daten
                      </h3>
                      <p className="mt-3 max-w-[980px] text-base leading-relaxed text-zinc-300">
                        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website und unserer Leistungen erforderlich ist, insbesondere bei Kontaktaufnahme, Terminbuchung und Nutzung unseres Angebotsformulars.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        3. Server-Log-Dateien
                      </h3>
                      <p className="mt-3 max-w-[980px] text-base leading-relaxed text-zinc-300">
                        Beim Aufruf unserer Website erhebt unser Hosting-Anbieter automatisch Informationen wie Browsertyp, Betriebssystem, Referer-URL, IP-Adresse und Uhrzeit des Zugriffs. Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit unseres Angebots.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        4. Cookies
                      </h3>
                      <p className="mt-3 max-w-[980px] text-base leading-relaxed text-zinc-300">
                        Wir setzen Cookies ein, um unsere Website nutzerfreundlich zu gestalten. Details dazu und wie Sie Ihre Einwilligung verwalten können, finden Sie in unserer <a href="#" className="text-[#7ecbff] underline">Cookie-Richtlinie.</a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        5. Ihre Rechte
                      </h3>
                      <p className="mt-3 max-w-[980px] text-base leading-relaxed text-zinc-300">
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierzu an <a href="mailto:info@siomet.de" className="text-[#7ecbff] underline">info@siomet.de</a>.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                        6. Beschwerderecht
                      </h3>
                      <p className="mt-3 max-w-[980px] text-base leading-relaxed text-zinc-300">
                        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
                      </p>
                    </section>
                  </div>
                </div>

                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              </div>
            </div>
          </div>
        )}

        {isCookiesOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-[2px]"
            onClick={() => setIsCookiesOpen(false)}
          >
            <div
              className="relative w-full max-w-[1180px] overflow-hidden rounded-[14px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Cookie-Einstellungen"
            >
              <div className="relative rounded-[8px] border border-[#37333b] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:p-8 lg:p-10">
                <button
                  type="button"
                  aria-label="Schließen"
                  onClick={() => setIsCookiesOpen(false)}
                  className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/95 text-2xl font-light text-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.3)] transition hover:bg-white"
                >
                  ×
                </button>

                <div className="pr-12 text-white/90">
                  <h2 className="font-display text-[2.3rem] leading-[0.95] tracking-[-0.08em] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                    Cookie-Einstellungen
                  </h2>

                  <p className="mt-6 max-w-[980px] text-base leading-relaxed text-zinc-300 sm:text-lg">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. Notwendige Cookies sind für den Betrieb der Seite erforderlich und können nicht deaktiviert werden. Analyse-Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, damit wir sie verbessern können.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div>
                        <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                          Notwendige Cookies
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-zinc-300">
                          Erforderlich für grundlegende Funktionen der Website, z. B. Formulare und Navigation.
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label="Notwendige Cookies aktiv"
                        aria-pressed={cookieSettings.necessary}
                        onClick={() => setCookieSettings((current) => ({ ...current, necessary: true }))}
                        className="relative h-7 w-12 rounded-full bg-[#8ec9ff] ring-2 ring-[#8ec9ff]/80 transition"
                      >
                        <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div>
                        <h3 className="text-[1.55rem] font-bold leading-[1.1] tracking-[-0.06em] text-white sm:text-[1.8rem]">
                          Analyse-Cookies
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-zinc-300">
                          Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um sie zu verbessern.
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={cookieSettings.analytics ? "Analyse-Cookies aktiviert" : "Analyse-Cookies deaktiviert"}
                        aria-pressed={cookieSettings.analytics}
                        onClick={() => setCookieSettings((current) => ({ ...current, analytics: !current.analytics }))}
                        className={`relative h-7 w-12 rounded-full transition ${
                          cookieSettings.analytics ? "bg-[#8ec9ff] ring-2 ring-[#8ec9ff]/80" : "bg-white/10 ring-1 ring-white/15"
                        }`}
                      >
                        <span
                          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                            cookieSettings.analytics ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      onClick={acceptAllCookies}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#7dc1ff] px-7 text-base font-semibold text-[#0a0d13] shadow-[0_0_0_1px_rgba(125,193,255,0.8)] transition hover:bg-[#9ed2ff]"
                    >
                      Alle akzeptieren
                    </button>
                    <button
                      type="button"
                      onClick={saveCookieSettings}
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-7 text-base font-semibold text-white transition hover:bg-white/5"
                    >
                      Auswahl speichern
                    </button>
                  </div>
                </div>

                <span aria-hidden="true" className="pointer-events-none absolute left-[1.125rem] top-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0" />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 md:flex-row md:items-center">
          <p className="text-sm text-[lab(47.8726%_0.0583529_5.78918)]">
            &copy; 2026 Siomet. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4 text-sm text-[lab(47.8726%_0.0583529_5.78918)]">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              Alle Scheduler-Systeme betriebsbereit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
