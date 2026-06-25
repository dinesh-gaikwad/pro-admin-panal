"use client";

import Link from "next/link";
import { useEffect } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/ferry", label: "Ferry" },
  { href: "/status", label: "Status" },
  { href: "/routes", label: "Routes" },
  { href: "/schedule", label: "Schedule" },
  { href: "/booking", label: "Booking" },
  { href: "/alerts", label: "Alerts" },
  { href: "/search", label: "Search" },
  { href: "/contact", label: "Contact" },
];

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`fixed inset-0 z-[90] ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        aria-label="Close menu overlay"
      />
      <aside
        className={`absolute left-0 top-0 h-full w-[86%] max-w-sm border-r border-white/10 bg-slate-950 p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} className="rounded-full border border-white/15 px-3 py-1 text-sm">
            Close
          </button>
        </div>
        <nav className="grid gap-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="rounded-xl border border-white/10 px-4 py-3 text-white/90 hover:bg-white/5">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
