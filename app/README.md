# DomainCompare Afrique — App Next.js

Comparateur de noms de domaine et d'hébergeurs 100% affiliation, ciblant
l'Afrique francophone (Burkina Faso, Côte d'Ivoire, Sénégal) avec couverture
internationale.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (thème custom repris de la maquette Stitch, voir
  `src/app/globals.css`)

## Structure

```
src/
  app/
    page.tsx                  -> Accueil / Recherche
    comparateur/page.tsx      -> Liste comparative des résultats de recherche
    scan-performance/page.tsx -> Scan de performance DNS par pays (interactif)
    statistiques/page.tsx     -> Statistiques des prix & benchmark registrars
  components/
    Header.tsx                -> Navigation partagée
    Footer.tsx                 -> Pied de page partagé
    PriceChart.tsx              -> Graphique interactif (toggle des séries)
```

## Ce qui reste à faire

- Brancher les vraies API des registrars (Porkbun, Namecheap, Cloudflare,
  Hostinger) pour remplacer les données statiques codées en dur dans
  chaque page.
- Ajouter la logique de recherche réelle (route API `/api/search` +
  vérification de disponibilité).
- Logger les recherches et clics affiliés (table `search_logs`,
  `affiliate_clicks` avec `subid`).
- Table `daily_prices` + cron quotidien pour alimenter la page Statistiques.
- Auth/compte utilisateur (optionnel, actuellement bouton avatar factice).

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
