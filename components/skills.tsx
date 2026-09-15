"use client";

import { capabilities } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="capabilities"
      className="bg-[#f0f0e9] py-20 sm:py-24"
    >
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="section-label">Capabilities</p>

            <h2 className="font-[Manrope] text-[clamp(2.7rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.075em]">
              How I can
              <br />
              contribute.
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-7 text-neutral-500">
            Combining product thinking, UX strategy, interaction design,
            visual craft, and technical collaboration to create scalable
            SaaS experiences.
          </p>
        </div>

        <div className="grid border-l border-t border-[#deded8] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="border-b border-r border-[#deded8] p-6 transition hover:bg-[#e8e8df] sm:p-8"
            >
              <span className="text-xs font-extrabold text-neutral-400">
                {capability.number}
              </span>

              <h3 className="mt-10 font-[Manrope] text-2xl font-extrabold tracking-[-0.04em]">
                {capability.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}