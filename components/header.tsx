"use client";

import Link from "next/link";
import { navigationLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-[76px] border-b border-[#d5d8d1] bg-[#f2f3ef] shadow-[0_3px_18px_rgba(30,45,35,0.06)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="site-container flex h-full items-center justify-between">
        <Link
          href="/"
          className="font-[Manrope] text-[20px] font-extrabold tracking-[-0.055em] text-neutral-950 dark:text-white"
        >
          Abhishek.
        </Link>

        <nav className="flex h-full items-center gap-7">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex h-full items-center text-[14px] font-semibold text-neutral-600 transition-colors duration-200 hover:text-[#245847] dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}