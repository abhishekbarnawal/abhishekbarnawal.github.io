"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#fffefa]"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 -top-56 h-[600px] w-[600px] rounded-full bg-[#dce8df] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-56 h-[600px] w-[600px] rounded-full bg-[#f1e8dc] opacity-60 blur-3xl"
      />

      <div className="site-container relative z-10 grid items-center gap-16 py-24 sm:py-28 lg:min-h-[850px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-32">
        {/* Left: Hero content */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d8ddd5] bg-white/75 px-4 py-2 text-xs font-semibold text-neutral-500 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#3e8b63]" />
            Senior Product Designer · SaaS & Enterprise UX
          </div>

          <p className="section-label">
            Hello, I&apos;m Abhishek Barnawal
          </p>

          <h1 className="max-w-3xl font-[Manrope] text-[clamp(3.4rem,6.5vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.075em] text-[#111412]">
            I turn complex
            <br />
            problems into
            <br />
            <em className="not-italic text-[#244b3d]">
              clear experiences.
            </em>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Senior Product Designer with 6+ years of experience designing
            enterprise SaaS products, complex workflows, design systems, and
            digital experiences for distributed teams.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="button button-dark shadow-[0_8px_24px_rgba(20,35,27,0.12)]"
            >
              View selected work
              <span>→</span>
            </a>

            {/* <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="button button-outline bg-white/70"
            >
              View résumé
              <span>↗</span>
            </a> */}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-neutral-500">
            <span>6+ years experience</span>
            <span>•</span>
            <span>Enterprise SaaS</span>
            <span>•</span>
            <span>Design systems</span>
            <span>•</span>
            <span>UX research</span>
          </div>
        </div>

        {/* Right: Actual image */}
        <div className="relative mx-auto w-full max-w-[600px]">
          {/* Decorative background frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[32px] border border-[#dce3da] bg-[#e8eee7]/70"
          />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#cfd8ce] bg-[#f3f5ef] p-3 shadow-[0_28px_80px_rgba(40,49,43,0.14)]">
            <div className="relative overflow-hidden rounded-[20px] border border-[#dce1d8] bg-white">
              <Image
                src="/images/isoadmin.png"
                alt="Enterprise product dashboard interface designed by Abhishek Barnawal"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-400">
              <span>Product thinking</span>
              <span>UX / UI / Systems</span>
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#d5dfd3] bg-[#f7f9f4] px-5 py-4 shadow-[0_16px_40px_rgba(40,49,43,0.12)]">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-neutral-400">
              Focus
            </p>

            <p className="mt-1 font-[Manrope] text-sm font-extrabold tracking-[-0.03em] text-[#244b3d]">
              Make complexity feel simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}