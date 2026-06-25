"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="container-pfr flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              className="rounded-full border border-white/15 px-4 py-2 text-sm md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              Menu
            </button>
            <Link href="/" className="text-lg font-semibold tracking-wide">PF&R Portal</Link>
          </div>
          <nav className="hidden gap-5 md:flex">
            <Link href="/ferry" className="text-sm text-white/80 hover:text-white">Ferry</Link>
            <Link href="/status" className="text-sm text-white/80 hover:text-white">Status</Link>
            <Link href="/routes" className="text-sm text-white/80 hover:text-white">Routes</Link>
            <Link href="/booking" className="text-sm text-white/80 hover:text-white">Booking</Link>
            <Link href="/alerts" className="text-sm text-white/80 hover:text-white">Alerts</Link>
            <Link href="/search" className="text-sm text-white/80 hover:text-white">Search</Link>
          </nav>
          <Link href="/admin/dashboard" className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white">
            Admin
          </Link>
        </div>
      </header>
      {open ? (
        <div className="container-pfr pb-4 md:hidden">
          <div className="card grid gap-2 p-4">
            <Link href="/ferry">Ferry</Link>
            <Link href="/status">Status</Link>
            <Link href="/routes">Routes</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/alerts">Alerts</Link>
            <Link href="/search">Search</Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
