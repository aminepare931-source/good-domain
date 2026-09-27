type Row = {
  domain: string;
  strike?: boolean;
  tag?: string;
  tagColor?: string;
  provider: string;
  providerNote?: string;
  available: boolean;
  price?: string;
  priceNote?: string;
  renewal?: string;
  renewalNote?: string;
  renewalAlert?: boolean;
  action: string;
  actionType: "buy" | "analyze";
};

const ROWS: Row[] = [
  {
    domain: "boutique.online",
    tag: "Hébergement inclus",
    provider: "Hostinger",
    providerNote: "DNS Anycast Cloudflare",
    available: true,
    price: "990 FCFA (1ère année)",
    renewal: "9 800 FCFA/an",
    renewalNote: "Non caché",
    action: "Acheter chez Hostinger",
    actionType: "buy",
  },
  {
    domain: "boutique.com",
    strike: true,
    tag: "Indisponible",
    provider: "Namecheap",
    providerNote: "Enregistré jusqu'en 2026",
    available: false,
    action: "Analyser pour mon pays",
    actionType: "analyze",
  },
  {
    domain: "boutique.site",
    tag: "Renouvellement le moins cher",
    provider: "Porkbun",
    providerNote: "Protection WHOIS gratuite à vie",
    available: true,
    price: "1 650 FCFA (1ère année)",
    renewal: "3 200 FCFA/an",
    renewalNote: "Renouvellement fixe — sans hausse surprise",
    action: "Acheter chez Porkbun",
    actionType: "buy",
  },
  {
    domain: "boutique.ci",
    tag: "Extension Côte d'Ivoire",
    provider: "LWS",
    providerNote: "Support francophone & paiement local",
    available: true,
    price: "14 500 FCFA/an",
    renewal: "14 500 FCFA/an",
    renewalNote: "Renouvellement identique",
    action: "Acheter chez LWS",
    actionType: "buy",
  },
  {
    domain: "boutique.sn",
    strike: true,
    tag: "Extension Sénégal",
    provider: "Enregistré auprès de NIC-Sénégal",
    available: false,
    action: "Analyser pour mon pays",
    actionType: "analyze",
  },
];

export default function ComparateurPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-8 flex flex-col gap-6">
      {/* Search bar */}
      <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col sm:flex-row items-stretch gap-2">
        <input
          defaultValue="boutique"
          className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low text-sm outline-none"
        />
        <select className="px-3 py-2.5 rounded-xl bg-surface-container-low text-sm">
          <option>TLDs auto</option>
        </select>
        <button className="bg-primary text-white font-semibold px-6 py-2.5 rounded-xl whitespace-nowrap">
          Rechercher →
        </button>
        <span className="hidden lg:flex items-center text-xs text-on-surface-variant whitespace-nowrap px-2">
          14 extensions analysées pour « boutique » · Mis à jour il y a 4 min
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <button className="bg-primary text-white font-semibold px-3 py-1.5 rounded-full">
          ↑ Prix d&apos;achat
        </button>
        <button className="bg-white px-3 py-1.5 rounded-full">
          Prix de renouvellement
        </button>
        <button className="bg-tertiary-container text-white px-3 py-1.5 rounded-full">
          ✓ Uniquement disponibles
        </button>
        <button className="bg-white px-3 py-1.5 rounded-full">
          Extensions africaines (.sn, .ci, .bf)
        </button>
        <button className="bg-white px-3 py-1.5 rounded-full">
          Extensions globales (.com, .net)
        </button>
      </div>

      {/* Transparency alert */}
      <div className="bg-surface-container-low rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
        <p>
          <strong>Alerte Transparence :</strong> Attention aux promotions de
          1ère année à prix cassé. Vérifiez systématiquement le tarif de
          renouvellement applicable dès l&apos;an 2.
        </p>
        <a href="#" className="font-semibold text-primary whitespace-nowrap">
          Comprendre le piège du renouvellement →
        </a>
      </div>

      {/* Results list */}
      <div className="flex flex-col gap-3">
        {ROWS.map((row) => (
          <div
            key={row.domain}
            className="bg-white rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`font-bold ${row.strike ? "line-through text-on-surface-variant" : ""}`}
                >
                  {row.domain}
                </span>
                {row.tag && (
                  <span className="text-[10px] bg-surface-container-high px-2 py-0.5 rounded-full font-semibold">
                    {row.tag}
                  </span>
                )}
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    row.available
                      ? "bg-tertiary-container text-white"
                      : "bg-error-container text-on-error-container"
                  }`}
                >
                  {row.available ? "Disponible" : "Pris"}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                {row.provider}
                {row.providerNote ? ` · ${row.providerNote}` : ""}
              </p>
            </div>

            {row.price && (
              <div className="text-right md:w-56 shrink-0">
                <div className="text-lg font-bold">{row.price}</div>
                {row.renewal && (
                  <div
                    className={`text-xs ${row.renewalAlert ? "text-error" : "text-on-surface-variant"}`}
                  >
                    Renouvellement : {row.renewal}
                    {row.renewalNote ? ` — ${row.renewalNote}` : ""}
                  </div>
                )}
              </div>
            )}

            <button
              className={`shrink-0 font-semibold text-sm px-4 py-2 rounded-xl whitespace-nowrap ${
                row.actionType === "buy"
                  ? "bg-primary text-white"
                  : "bg-surface-container-low text-on-surface"
              }`}
            >
              {row.action}
            </button>
          </div>
        ))}
      </div>

      {/* Strategic recommendation */}
      <div className="bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Guide décisionnel stratégique
          </span>
          <h2 className="text-xl font-bold mt-1">
            Notre recommandation pour un projet e-commerce en Afrique de
            l&apos;Ouest
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Privilégiez le <strong>.com</strong> si vous visez la diaspora
            internationale ou les levées de fonds régionales, ou optez
            directement pour le <strong>.ci</strong> ou le{" "}
            <strong>.sn</strong> pour un ancrage local immédiat, une
            indexation Google locale optimisée et une confiance accrue auprès
            des acheteurs mobiles utilisant Orange Money ou Wave.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="bg-surface-container-low rounded-xl p-3 text-center min-w-[140px]">
            <div className="text-lg font-bold text-primary">+42%</div>
            <div className="text-xs text-on-surface-variant">
              Confiance diaspora via .com
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3 text-center min-w-[140px]">
            <div className="text-lg font-bold text-tertiary-container">
              +58%
            </div>
            <div className="text-xs text-on-surface-variant">
              Taux de conversion sur .ci / .sn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
