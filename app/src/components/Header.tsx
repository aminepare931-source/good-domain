"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Recherche" },
  { href: "/comparateur", label: "Comparateur" },
  { href: "/scan-performance", label: "Scan Performance Pays" },
  { href: "/statistiques", label: "Statistiques & Transparence" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-extrabold text-sm">
            DC
          </div>
          <span className="font-semibold text-primary tracking-tight hidden sm:inline">
            DomainCompare <span className="text-secondary">Afrique</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low px-1 py-1 rounded-full shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-primary-container text-white"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center bg-surface-container-low rounded-full px-3 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] text-sm font-semibold gap-1">
            <span>XOF (FCFA)</span>
            <span className="text-on-surface-variant text-xs">▼</span>
          </div>
          <div className="flex items-center bg-surface-container-high rounded-full p-0.5">
            <button className="bg-surface-container-lowest text-primary text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
              FR
            </button>
            <button className="text-on-surface-variant text-xs font-semibold px-2.5 py-1 rounded-full">
              EN
            </button>
          </div>
          <Link
            href="/aide"
            className="hidden xl:flex items-center gap-1 text-sm font-semibold text-on-surface-variant hover:text-on-surface bg-surface-container-low px-3 py-1.5 rounded-full"
          >
            Aide &amp; FAQ
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">
            •
          </div>
        </div>
      </div>
    </header>
  );
}
