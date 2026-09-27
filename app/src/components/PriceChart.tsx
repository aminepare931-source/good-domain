"use client";

import { useState } from "react";

const SERIES = [
  {
    id: "com",
    label: ".com (ICANN)",
    color: "#1E40AF",
    dash: undefined,
    path: "M 100 178 L 300 172 L 500 162 L 700 156 L 860 148 L 960 140",
  },
  {
    id: "online",
    label: ".online (Promo)",
    color: "#10B981",
    dash: "6,4",
    path: "M 100 252 L 300 250 L 500 248 L 700 120 L 860 102 L 960 100",
  },
  {
    id: "site",
    label: ".site (Volatile)",
    color: "#8B5CF6",
    dash: undefined,
    path: "M 100 230 L 300 205 L 500 115 L 700 170 L 860 90 L 960 110",
  },
  {
    id: "cctld",
    label: ".sn & .ci (Souverains)",
    color: "#0284C7",
    dash: undefined,
    path: "M 100 80 L 300 80 L 500 80 L 700 80 L 860 80 L 960 80",
  },
] as const;

const Y_TICKS = [
  { y: 40, label: "20 €" },
  { y: 100, label: "15 €" },
  { y: 160, label: "10 €" },
  { y: 220, label: "5 €" },
  { y: 270, label: "0 €" },
];

const X_TICKS = [
  { x: 100, label: "T1 2022" },
  { x: 300, label: "T1 2023" },
  { x: 500, label: "T3 2023" },
  { x: 700, label: "T1 2024" },
  { x: 860, label: "T3 2024" },
  { x: 960, label: "2025 (Actuel)" },
];

export default function PriceChart() {
  const [active, setActive] = useState<Record<string, boolean>>({
    com: true,
    online: true,
    site: true,
    cctld: true,
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {SERIES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive((prev) => ({ ...prev, [s.id]: !prev[s.id] }))}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-opacity"
            style={{
              backgroundColor: `${s.color}1a`,
              color: s.color,
              opacity: active[s.id] ? 1 : 0.4,
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <div className="relative w-full bg-surface-container-low rounded-lg p-3 md:p-4 overflow-hidden">
        <div className="w-full h-72 md:h-84 relative">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 1000 320"
          >
            {Y_TICKS.map((t) => (
              <g key={t.label}>
                <line
                  stroke="#CBD5E1"
                  strokeDasharray={t.label === "0 €" ? undefined : "3,3"}
                  strokeWidth={t.label === "0 €" ? 1 : 0.8}
                  x1={60}
                  x2={980}
                  y1={t.y}
                  y2={t.y}
                />
                <text
                  className="text-[10px] fill-secondary"
                  textAnchor="end"
                  x={50}
                  y={t.y + 4}
                >
                  {t.label}
                </text>
              </g>
            ))}

            {X_TICKS.map((t) => (
              <g key={t.label}>
                <line
                  stroke="#E2E8F0"
                  strokeWidth={0.8}
                  x1={t.x}
                  x2={t.x}
                  y1={30}
                  y2={270}
                />
                <text
                  className="text-[11px] fill-secondary"
                  textAnchor="middle"
                  x={t.x}
                  y={290}
                >
                  {t.label}
                </text>
              </g>
            ))}

            {SERIES.map((s) => (
              <path
                key={s.id}
                d={s.path}
                fill="none"
                stroke={s.color}
                strokeDasharray={s.dash}
                strokeLinecap="round"
                strokeWidth={s.id === "com" ? 3 : 2.5}
                opacity={active[s.id] ? 1 : 0}
              />
            ))}

            <g transform="translate(700, 156)" opacity={active.com ? 1 : 0}>
              <circle fill="#1E40AF" fillOpacity={0.2} r={7} />
              <circle fill="#1E40AF" r={4} />
            </g>
            <g transform="translate(700, 120)" opacity={active.online ? 1 : 0}>
              <circle fill="#10B981" r={4} />
            </g>
          </svg>

          <div className="absolute left-1/2 top-4 -translate-x-1/2 md:translate-x-0 md:left-[62%] md:top-14 z-10 bg-on-surface text-white p-3 rounded-lg shadow-xl pointer-events-none max-w-xs flex flex-col gap-1">
            <div className="flex items-center justify-between text-[11px] opacity-70">
              <span>T1 2024 · Observatoire ICANN</span>
              <span className="w-2 h-2 rounded-full bg-error-container" />
            </div>
            <p className="text-sm font-semibold">
              Pic de hausse .com : +7% voté par Verisign
            </p>
            <p className="text-xs opacity-70">
              Application du plafond contractuel annuel. Tarif grossiste
              passé à 10,26 $ HT répercuté uniformément chez tous les
              bureaux d&apos;enregistrement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
