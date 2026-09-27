# DomainCompare Afrique

Comparateur de noms de domaine et d'hébergeurs 100% affiliation, ciblant l'Afrique francophone (Burkina Faso, Côte d'Ivoire, Sénégal) avec couverture internationale.

## Stack prévue
- Next.js (Vercel)
- Base de données légère pour : logs de recherche, clics affiliés (subid), historique quotidien des prix des extensions

## Structure du dépôt

- `/app` — Le projet Next.js réel (App Router + TypeScript + Tailwind v4), avec les 4 écrans convertis en composants React : Accueil/Recherche, Comparateur, Scan Performance Pays, Statistiques & Transparence. Voir `app/README.md` pour le détail et ce qui reste à brancher (API registrars, logs, cron des prix).
- `/mockups` — Maquettes HTML brutes générées avec Google Stitch, gardées comme référence visuelle.
  - `statistiques-transparence.html` + capture d'écran associée

## Démarrer en local

```bash
cd app
npm install
npm run dev
```
