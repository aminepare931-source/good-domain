import PriceChart from "@/components/PriceChart";

const KPIS = [
  {
    label: "Inflation .com (3 ans)",
    value: "+27,1%",
    tag: "Hausse ICANN",
    tagClass: "text-error bg-error-container/40",
    note: "De 8,50 € en 2022 à 10,80 € en 2025.",
  },
  {
    label: "Écart Appel / Renouv. (.online)",
    value: "+820%",
    valueClass: "text-error",
    tag: "Alerte marge",
    tagClass: "text-error bg-error-container/40",
    note: "1,50 € 1ère année puis 15,00 €/an.",
  },
  {
    label: "Stabilité ccTLD (.sn / .ci)",
    value: "0,0%",
    valueClass: "text-tertiary-container",
    tag: "Fixe",
    tagClass: "text-tertiary-container bg-tertiary-fixed-dim/30",
    note: "Barèmes institutionnels sans frais surprises.",
  },
  {
    label: "Fournisseur le plus loyal",
    value: "Porkbun",
    valueClass: "text-primary",
    tag: "Zéro surcoût",
    tagClass: "text-primary bg-primary-container/10",
    note: "Marge brute moyenne < 1,20 €/an.",
  },
];

const SYNTHESIS = [
  {
    title: "Le .online subit la plus forte hausse au renouvellement (+820%)",
    text: "Le tarif d'acquisition attractif masque un coût de renouvellement dix fois supérieur dès le mois 13.",
  },
  {
    title: "Le .com reste l'extension la plus stable",
    text: "Indexé sur un cadre de régulation strict et prévisible, idéal pour un investissement de marque pérenne.",
  },
  {
    title: "Porkbun maintient les marges les plus faibles",
    text: "Sur 3 ans consécutifs, c'est le bureau d'enregistrement le plus fidèle au coût brut sans majoration unilatérale.",
  },
];

const REGISTRARS = [
  {
    code: "PB",
    name: "Porkbun",
    badge: "Recommandé",
    origin: "Accrédité ICANN · USA",
    advantages:
      "Tarifs de renouvellement au prix coûtant sans majoration abusive, WHOIS privacy gratuit à vie, interface moderne et épurée.",
    limits:
      "Pas de paiement par mobile money direct (nécessite carte internationale ou PayPal), support en anglais uniquement.",
    rating: 5.0,
    ratingNote: "Prix coûtant strict",
    ratingClass: "text-tertiary-container",
    payments: ["Visa / Mastercard", "PayPal", "Crypto"],
    paymentNote: "Pas de Mobile Money natif",
    paymentAlert: true,
  },
  {
    code: "NC",
    name: "Namecheap",
    origin: "Accrédité ICANN · USA",
    advantages:
      "Large choix de TLDs, promotions fréquentes, écosystème d'outils DNS très complet.",
    limits:
      "Forte augmentation du prix de renouvellement dès la 2ème année, interface parfois complexe.",
    rating: 3.5,
    ratingNote: "Hausse moyenne +35%",
    ratingClass: "text-secondary",
    payments: ["Cartes banques UEMOA", "PayPal", "Bitcoin"],
    paymentNote: "Paiement international standard",
  },
  {
    code: "CF",
    name: "Cloudflare",
    badge: "Anycast Edge",
    origin: "Infrastructure DNS · Global",
    advantages:
      "Vente de domaines à prix coûtant grossiste strict (zéro marge), réseau DNS Anycast le plus rapide du monde avec présence à Dakar et Abidjan.",
    limits:
      "Obligation d'utiliser les serveurs DNS Cloudflare, pas d'achats de ccTLD africains (.ci, .sn, .bf) pour le moment.",
    rating: 4.9,
    ratingNote: "Marge 0% garantie",
    ratingClass: "text-tertiary-container",
    payments: ["Visa / Mastercard 3DS", "PayPal"],
    paymentNote: "Facturation en USD débitée en FCFA",
  },
  {
    code: "HO",
    name: "Hostinger",
    origin: "Accrédité ICANN · Europe",
    advantages:
      "Première année extrêmement abordable avec nom de domaine gratuit sur les plans d'hébergement, interface en français.",
    limits:
      "Engagement pluriannuel nécessaire pour les meilleurs tarifs, renouvellement coûteux sur certaines extensions.",
    rating: 3.0,
    ratingNote: "Fort effet de seuil",
    ratingClass: "text-error",
    payments: ["Carte bancaire internationale", "Google Pay"],
    paymentNote: "Passerelle euro standard",
  },
  {
    code: "LW",
    name: "LWS",
    badge: "Souverain ccTLD",
    origin: "Bureaux France & Partenaires Afrique",
    advantages:
      "Enregistrement direct des extensions d'Afrique de l'Ouest (.ci, .sn, .bf), support client 100% francophone, factures conformes aux entreprises locales.",
    limits:
      "Interface d'administration plus traditionnelle, prix légèrement supérieurs sur les extensions génériques (.com, .net).",
    rating: 4.2,
    ratingNote: "Contrats transparents",
    ratingClass: "text-tertiary-container",
    payments: ["Orange Money", "Wave / Moov", "Virement local UEMOA"],
    paymentNote: "Facturation Pro UEMOA",
    paymentPositive: true,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-amber-500 text-base leading-none">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i;
        const half = !filled && rating >= i - 0.5;
        return (
          <span key={i}>{filled ? "★" : half ? "⯪" : "☆"}</span>
        );
      })}
    </div>
  );
}

export default function StatistiquesPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-8 flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary text-xs font-semibold uppercase tracking-wider">
            Observatoire de transparence DNS
          </span>
          <span className="text-outline text-xs">•</span>
          <span className="text-xs font-semibold text-secondary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
            Audit trimestriel T1 2026
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Statistiques des Prix &amp; Observatoire de Transparence
        </h1>
        <p className="text-base text-secondary max-w-4xl">
          Suivi historique de l&apos;inflation des noms de domaine, des
          hausses de renouvellement et comparatif objectif des bureaux
          d&apos;enregistrement opérant en Afrique de l&apos;Ouest et à
          l&apos;international.
        </p>
      </section>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between"
          >
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
              {k.label}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className={`text-2xl font-bold ${k.valueClass ?? "text-on-surface"}`}>
                {k.value}
              </span>
              <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded ${k.tagClass}`}>
                {k.tag}
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">{k.note}</p>
          </div>
        ))}
      </div>

      {/* Chart section */}
      <section className="bg-white rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Analyse comparative
            </span>
            <h2 className="text-xl font-bold tracking-tight mt-0.5">
              Évolution du tarif moyen d&apos;enregistrement &amp;
              renouvellement (2022 - 2025)
            </h2>
            <p className="text-xs text-secondary mt-0.5">
              Données agrégées sur plus de 32 000 transactions d&apos;achat
              et de renouvellement annuel.
            </p>
          </div>
        </div>

        <PriceChart />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {SYNTHESIS.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-3 p-3 rounded-lg bg-surface"
            >
              <div>
                <p className="font-semibold text-sm">{s.title}</p>
                <p className="text-xs text-secondary mt-0.5">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative table */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Benchmark indépendant
            </span>
            <h2 className="text-xl font-bold tracking-tight">
              Évaluation comparative des fournisseurs : Porkbun, Namecheap,
              Cloudflare, Hostinger, LWS
            </h2>
            <p className="text-sm text-secondary">
              Grille multicritères passée au crible pour les créateurs,
              startups et organisations d&apos;Afrique subsaharienne.
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-surface-container-low p-1 rounded-full text-xs">
            <span className="text-secondary px-2">Devise d&apos;audit :</span>
            <span className="text-primary font-bold bg-white px-2 py-0.5 rounded-full shadow-xs">
              FCFA / EUR
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-surface-container-low text-secondary text-xs tracking-wider uppercase">
                <th className="py-3 px-4 font-semibold">Fournisseur</th>
                <th className="py-3 px-4 font-semibold w-1/4">Avantages</th>
                <th className="py-3 px-4 font-semibold w-1/4">Limites</th>
                <th className="py-3 px-4 font-semibold text-center whitespace-nowrap">
                  Transparence Renouvellement
                </th>
                <th className="py-3 px-4 font-semibold">
                  Paiements acceptés en Afrique
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {REGISTRARS.map((r, i) => (
                <tr
                  key={r.code}
                  className={i % 2 === 1 ? "bg-surface-container-low/30" : ""}
                >
                  <td className="py-5 px-4 align-top">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold shrink-0">
                        {r.code}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold">{r.name}</span>
                          {r.badge && (
                            <span className="text-[10px] text-tertiary-container bg-tertiary-fixed-dim/30 px-1 rounded">
                              {r.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-secondary">
                          {r.origin}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4 align-top text-on-surface">
                    {r.advantages}
                  </td>
                  <td className="py-5 px-4 align-top text-secondary">
                    {r.limits}
                  </td>
                  <td className="py-5 px-4 align-top text-center">
                    <div className="inline-flex flex-col items-center">
                      <Stars rating={r.rating} />
                      <span className="text-xs font-bold mt-1">
                        {r.rating.toFixed(1).replace(".", ",")} / 5
                      </span>
                      <span className={`text-[11px] ${r.ratingClass}`}>
                        {r.ratingNote}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 align-top">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap gap-1">
                        {r.payments.map((p) => (
                          <span
                            key={p}
                            className={`text-[11px] px-2 py-0.5 rounded ${
                              r.paymentPositive
                                ? "bg-tertiary-fixed-dim/30 text-tertiary-container font-semibold"
                                : "bg-surface-container text-on-surface"
                            }`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      <span
                        className={`text-xs mt-1 ${
                          r.paymentAlert
                            ? "text-error"
                            : r.paymentPositive
                            ? "text-tertiary-container font-semibold"
                            : "text-secondary"
                        }`}
                      >
                        {r.paymentNote}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-surface-container-low rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <p className="font-semibold">Méthodologie d&apos;audit indépendant</p>
          <p className="text-sm text-secondary">
            Données actualisées quotidiennement via les registres officiels
            ICANN, NIC.CI, NIC.SN et l&apos;ARCEP Burkina Faso. Aucune mise
            en avant sponsorisée.
          </p>
        </div>
        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-xs shrink-0">
          Données brutes CSV
        </button>
      </section>
    </div>
  );
}
