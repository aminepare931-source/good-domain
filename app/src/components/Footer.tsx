const NODES = [
  "CI (Abidjan)",
  "SN (Dakar)",
  "BF (Ouaga)",
  "FR (Paris)",
  "US (Ashburn)",
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)] mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <span className="inline-flex w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
            <p className="text-sm text-on-surface-variant">
              <strong className="text-on-surface font-semibold">
                Indépendance éditoriale :
              </strong>{" "}
              DomainCompare Afrique compare les prix publics des registrars
              sans commission cachée.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
              Nœuds surveillés :
            </span>
            {NODES.map((node) => (
              <div
                key={node}
                className="flex items-center gap-1.5 text-xs font-semibold text-on-surface"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-sm text-on-surface-variant">
            © 2026 DomainCompare Afrique. Observatoire ouvert du DNS et de
            l&apos;Hébergement Cloud en Afrique de l&apos;Ouest.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-semibold text-on-surface-variant hover:text-on-surface"
            >
              Méthodologie Renouvellement
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-on-surface-variant hover:text-on-surface"
            >
              API Publique
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-on-surface-variant hover:text-on-surface"
            >
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
