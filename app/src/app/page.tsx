import Link from "next/link";

const PARTNERS = ["Porkbun", "Namecheap", "Cloudflare", "Hostinger", "LWS"];

const INSTANT_RESULTS = [
  {
    provider: "Porkbun",
    badge: "Recommandé",
    latency: ["🇨🇮 28 ms", "🇸🇳 39 ms"],
    payment: ["CB / Visa", "PayPal", "Crypto"],
    priceY1: "15 200 FCFA",
    renewal: "15 200 FCFA/an",
    renewalNote: "Renouvellement figé",
  },
  {
    provider: "Namecheap",
    badge: null,
    latency: ["🇨🇮 112 ms", "🇸🇳 98 ms"],
    payment: ["CB / Visa", "PayPal"],
    priceY1: "11 500 FCFA",
    priceY1Note: "-40% Promo An 1",
    renewal: "19 800 FCFA/an",
    renewalNote: "Hausse +72% an 2",
    renewalAlert: true,
  },
  {
    provider: "LWS Afrique",
    badge: "Mobile Money",
    latency: ["🇧🇫 42 ms", "🇸🇳 54 ms"],
    payment: ["Wave", "Orange Money"],
    priceY1: "14 900 FCFA",
    priceY1Note: "Facturation locale TTC",
    renewal: "16 000 FCFA/an",
    renewalNote: "Renouvellement standard",
  },
];

const FEATURES = [
  {
    title: "Zéro frais cachés",
    description:
      "Visualisez immédiatement le prix de renouvellement an 2, souvent multiplié par 3. Nous calculons le TCO (coût total sur 3 ans) pour éviter toute mauvaise surprise de carte bancaire débitée.",
  },
  {
    title: "Test de latence locale",
    description:
      "Vérifiez si les DNS et serveurs du registrar répondent vite depuis Dakar, Abidjan et Ouagadougou. Un DNS distant en Europe ou aux USA peut ralentir l'accès de 150ms pour vos visiteurs africains.",
  },
  {
    title: "Moyens de paiement locaux",
    description:
      "Filtrez les bureaux d'enregistrement acceptant Orange Money, Wave ou cartes bancaires internationales. Ne soyez plus bloqué au checkout par une carte de débit refusée sur les plateformes étrangères.",
  },
];

const TRENDS = [
  { ext: ".com", region: "Mondial", price: "6 200 FCFA/an", note: "Stable" },
  { ext: ".sn", region: "Sénégal", price: "12 000 FCFA/an", note: "-8% ce mois" },
  { ext: ".ci", region: "Côte d'Ivoire", price: "15 000 FCFA/an", note: "Fixé ARTCI" },
  { ext: ".online", region: "Super Promo", price: "1 500 FCFA/an", note: "An 2 : 18k" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-8 flex flex-col gap-12">
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-4 pt-6">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
            Indépendant &amp; mis à jour il y a 3 minutes · Couverture Afrique
            de l&apos;Ouest &amp; International
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Trouvez le meilleur registrar pour votre nom de domaine en Afrique
          </h1>
          <p className="text-lg text-secondary">
            Comparez les prix de tous les registrars en un clic, sans
            engagement
          </p>

          <form className="w-full max-w-2xl mt-4 flex flex-col sm:flex-row items-stretch gap-2 bg-white rounded-2xl shadow-lg p-2">
            <input
              type="text"
              placeholder="Tapez un nom, ex: boutique"
              className="flex-1 px-4 py-3 rounded-xl outline-none text-sm"
            />
            <select className="px-3 py-3 rounded-xl text-sm bg-surface-container-low">
              <option>Toutes (.com, .ci, .sn, .bf…)</option>
            </select>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap"
            >
              Comparer les prix →
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="px-4 py-1.5 rounded-full border border-outline-variant text-sm font-medium bg-white"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant">
            Prix publics analysés en temps réel avec conversion FCFA (XOF)
            automatique.
          </p>
        </section>

        {/* Instant comparison */}
        <section className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-on-surface text-white text-xs font-bold px-2 py-1 rounded-full">
              Matrice en direct
            </span>
            <span className="text-xs text-on-surface-variant">
              Temps de réponse DNS calculé depuis Abidjan
            </span>
          </div>
          <h2 className="text-xl font-bold mb-4">
            Comparatif instantané pour :{" "}
            <span className="text-primary">boutique.ci</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="text-left text-xs uppercase text-on-surface-variant border-b border-surface-container">
                  <th className="py-2 pr-4">Registrar</th>
                  <th className="py-2 pr-4">Latence</th>
                  <th className="py-2 pr-4">Paiement</th>
                  <th className="py-2 pr-4">An 1</th>
                  <th className="py-2 pr-4">Renouvellement</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {INSTANT_RESULTS.map((row) => (
                  <tr
                    key={row.provider}
                    className="border-b border-surface-container last:border-0"
                  >
                    <td className="py-3 pr-4 font-semibold">
                      {row.provider}
                      {row.badge && (
                        <span className="ml-2 text-[10px] bg-tertiary-container text-white px-1.5 py-0.5 rounded-full">
                          {row.badge}
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {row.latency.join(" · ")}
                    </td>
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {row.payment.join(" · ")}
                    </td>
                    <td className="py-3 pr-4 font-bold whitespace-nowrap">
                      {row.priceY1}
                      {row.priceY1Note && (
                        <div className="text-[11px] font-normal text-tertiary-container">
                          {row.priceY1Note}
                        </div>
                      )}
                    </td>
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {row.renewal}
                      <div
                        className={`text-[11px] ${
                          row.renewalAlert ? "text-error" : "text-on-surface-variant"
                        }`}
                      >
                        {row.renewalNote}
                      </div>
                    </td>
                    <td className="py-3">
                      <button className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">
                        Voir l&apos;offre
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section className="flex flex-col gap-6">
          <div className="text-center">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Pourquoi utiliser un comparateur spécialisé
            </span>
            <h2 className="text-2xl font-bold mt-1">
              L&apos;infrastructure de vos domaines, auditée sans compromis
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-2"
              >
                <h3 className="font-bold">{f.title}</h3>
                <p className="text-sm text-on-surface-variant">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Market trends */}
        <section className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Baromètre du marché
            </span>
            <h2 className="text-2xl font-bold mt-1">
              Tendances du jour &amp; Prix plancher en Afrique de l&apos;Ouest
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRENDS.map((t) => (
              <div
                key={t.ext}
                className="bg-primary-container text-white rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{t.ext}</span>
                  <span className="text-[11px] opacity-80">{t.region}</span>
                </div>
                <div className="text-lg font-bold">{t.price}</div>
                <div className="text-[11px] opacity-80">{t.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Neutrality banner */}
        <section className="bg-surface-container-low rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold">Notre garantie de neutralité technologique</p>
            <p className="text-sm text-on-surface-variant max-w-2xl">
              Aucun registrar ne peut acheter la première position de nos
              tableaux comparatifs. Le tri s&apos;effectue strictement selon
              vos critères de prix, de performance DNS et d&apos;options de
              paiement locales.
            </p>
          </div>
          <Link
            href="/statistiques"
            className="bg-white text-primary font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm"
          >
            Consulter le manifeste
          </Link>
        </section>
      </div>
    </div>
  );
}
