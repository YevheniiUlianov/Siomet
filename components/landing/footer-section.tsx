"use client";

const footerLinks = {
  Unternehmen: [
    { name: "Unsere Prinzipien", href: "#how-it-works" },
    { name: "Team", href: "#insights" },
    { name: "Über uns", href: "#pricing" },
    { name: "Produkte", href: "#products" },
    { name: "Projekte", href: "#projects" },
    { name: "Kundengeschichten", href: "#customers" },
  ],
  Rechtliches: [
    { name: "Datenschutz", href: "#" },
    { name: "AGBs", href: "#" },
    { name: "Sicherheit", href: "#security" },
  ],
};

export function FooterSection() {
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
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-2 text-sm text-[lab(47.8726%_0.0583529_5.78918)] transition-colors hover:text-white"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

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
