"use client";

import { useState } from "react";

const COUNTRIES = [
  { code: "CI", flag: "🇨🇮", name: "Côte d'Ivoire", node: "Abidjan (CI-IXP)", status: "Actif", latency: 24 },
  { code: "SN", flag: "🇸🇳", name: "Sénégal", node: "Dakar (SENIX)", status: "Sonde prête", latency: 31 },
  { code: "BF", flag: "🇧🇫", name: "Burkina Faso", node: "Ouagadougou (BFIX)", status: "Sonde prête", latency: 52 },
  { code: "FR", flag: "🇫🇷", name: "France", node: "Paris (FranceIX)", status: "Point Diaspora", latency: 86 },
  { code: "US", flag: "🇺🇸", name: "États-Unis", node: "Ashburn / New York", status: "Transatlantique", latency: 178 },
];

const REGISTRARS = [
  { name: "Cloudflare DNS", detail: "1.1.1.1 / Authoritative TLD Anycast", verdict: "Excellent — Nœud local Abidjan actif", latency: 24, pct: 10 },
  { name: "Porkbun + Cloudflare", detail: "Registrar certifié + Passerelle Anycast", verdict: "Très rapide — DNS Anycast mondial", latency: 42, pct: 22 },
  { name: "Hostinger", detail: "Hébergement Cloud + DNS standard", verdict: "Modéré — Routage via serveur Europe du Sud", latency: 78, pct: 42 },
  { name: "LWS", detail: "Datacenter Paris / Roubaix", verdict: "Acceptable — Serveurs hébergés en France métropolitaine", latency: 94, pct: 51 },
  { name: "Namecheap (serveurs US)", detail: "Mutualisé US East Coast / BasicDNS", verdict: "Élevé — Recommandé avec activation d'un CDN local", latency: 185, pct: 100 },
];

const PROTOCOL_TABLE = [
  { provider: "Cloudflare DNS", ttfb: "24 ms", dnssec: "Inclus & Automatique", anycast: "Abidjan, Lagos, Dakar", score: "9.9 / 10" },
  { provider: "Porkbun", ttfb: "42 ms", dnssec: "Gratuit 1-clic", anycast: "Réseau Anycast étendu", score: "9.4 / 10" },
  { provider: "Hostinger", ttfb: "78 ms", dnssec: "Disponible (Manuel)", anycast: "Option payante Cloud", score: "7.8 / 10" },
  { provider: "LWS", ttfb: "94 ms", dnssec: "Inclus standard", anycast: "Non (Nœuds Europe)", score: "7.2 / 10" },
  { provider: "Namecheap", ttfb: "185 ms", dnssec: "Supporté", anycast: "Non disponible", score: "5.1 / 10" },
];

function latencyColor(ms: number) {
  if (ms < 50) return "bg-tertiary-container";
  if (ms <= 120) return "bg-amber-500";
  return "bg-error";
}

export default function ScanPerformancePage() {
  const [selected, setSelected] = useState("CI");
  const country = COUNTRIES.find((c) => c.code === selected)!;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-8 flex flex-col gap-6">
      <div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          Observatoire télémétrique Afrique de l&apos;Ouest
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Scan de Performance DNS &amp; Hébergement par Pays
          </h1>
          <div className="flex items-center gap-2 shrink-0">
            <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl">
              ↻ Relancer un test en direct
            </button>
            <button className="bg-white text-sm font-semibold px-4 py-2 rounded-xl border border-outline-variant">
              📄 Rapport PDF
            </button>
          </div>
        </div>
        <p className="text-sm text-on-surface-variant mt-1">
          Mesurez le temps de réponse (latence) et propagation DNS pour un
          visiteur local selon le registrar et le serveur d&apos;hébergement.
        </p>
      </div>

      {/* Country selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            onClick={() => setSelected(c.code)}
            className={`text-left bg-white rounded-xl p-3 border-2 transition-colors ${
              selected === c.code ? "border-primary" : "border-transparent"
            }`}
          >
            <div className="text-xl">{c.flag}</div>
            <div className="text-sm font-semibold mt-1">{c.name}</div>
            <div className="text-xs text-on-surface-variant">{c.node}</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-semibold text-tertiary-container">
                {c.status}
              </span>
              <span className="text-sm font-bold">{c.latency} ms</span>
            </div>
          </button>
        ))}
      </div>

      {/* Verdict + distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-2xl p-5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-tertiary-container">
              ● Index vitesse conforme
            </span>
            <span className="text-on-surface-variant">
              Indice d&apos;expérience utilisateur (A+)
            </span>
          </div>
          <h2 className="text-xl font-bold mt-2">
            Verdict : Bon pour un site ciblant {country.name}
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Avec un temps de résolution DNS moyen de 38 ms et un CDN
            disposant d&apos;un point de présence ouest-africain, vos
            utilisateurs bénéficieront d&apos;un affichage quasi instantané.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div>
              <div className="text-lg font-bold">38 ms</div>
              <div className="text-xs text-on-surface-variant">TTFB DNS Médian</div>
            </div>
            <div>
              <div className="text-lg font-bold text-tertiary-container">100 %</div>
              <div className="text-xs text-on-surface-variant">Disponibilité DNSSEC</div>
            </div>
            <div>
              <div className="text-lg font-bold">2Africa / WACS</div>
              <div className="text-xs text-on-surface-variant">Routage Sous-Marin</div>
            </div>
            <div>
              <div className="text-lg font-bold">0.0 %</div>
              <div className="text-xs text-on-surface-variant">Perte de paquets</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-2">
          <span className="text-xs font-semibold text-on-surface-variant">
            Distribution de Latence
          </span>
          <div className="relative w-28 h-28 rounded-full bg-[conic-gradient(theme(colors.tertiary-container)_0_65%,theme(colors.amber.500)_65%_90%,theme(colors.error)_90%_100%)] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="font-bold">24 ms</span>
              <span className="text-[10px] text-on-surface-variant">Ultra-rapide</span>
            </div>
          </div>
          <div className="text-xs w-full mt-2 flex flex-col gap-1">
            <div className="flex justify-between"><span>● DNS Anycast Local</span><span>65%</span></div>
            <div className="flex justify-between"><span>● Routage Europe</span><span>25%</span></div>
            <div className="flex justify-between"><span>● Hébergement US direct</span><span>10%</span></div>
          </div>
        </div>
      </div>

      {/* Latency bars */}
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-bold">Indicateurs de latence par registrar &amp; hébergeur</h3>
        <p className="text-xs text-on-surface-variant mb-4">
          Mesures au départ d&apos;Abidjan vers les serveurs autoritaires et
          serveurs d&apos;origine.
        </p>
        <div className="flex flex-col gap-4">
          {REGISTRARS.map((r) => (
            <div key={r.name}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-xs font-semibold">{r.verdict} · {r.latency} ms</span>
              </div>
              <p className="text-xs text-on-surface-variant">{r.detail}</p>
              <div className="w-full h-2 bg-surface-container-low rounded-full mt-1 overflow-hidden">
                <div
                  className={`h-full ${latencyColor(r.latency)}`}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol table */}
      <div className="bg-white rounded-2xl p-5 overflow-x-auto">
        <h3 className="font-bold mb-1">Tableau comparatif des protocoles testés</h3>
        <p className="text-xs text-on-surface-variant mb-4">
          Évaluation détaillée de la sécurité, propagation et présence
          d&apos;accélérateur Anycast en Afrique subsaharienne.
        </p>
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className="text-left text-xs uppercase text-on-surface-variant border-b border-surface-container">
              <th className="py-2 pr-4">Fournisseur</th>
              <th className="py-2 pr-4">Résolution DNS (TTFB)</th>
              <th className="py-2 pr-4">Support DNSSEC</th>
              <th className="py-2 pr-4">Anycast CDN Afrique</th>
              <th className="py-2">Note globale</th>
            </tr>
          </thead>
          <tbody>
            {PROTOCOL_TABLE.map((row) => (
              <tr key={row.provider} className="border-b border-surface-container last:border-0">
                <td className="py-3 pr-4 font-semibold">{row.provider}</td>
                <td className="py-3 pr-4">{row.ttfb}</td>
                <td className="py-3 pr-4">{row.dnssec}</td>
                <td className="py-3 pr-4">{row.anycast}</td>
                <td className="py-3 font-bold">{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
