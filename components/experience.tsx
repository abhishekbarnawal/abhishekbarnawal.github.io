"use client";

import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#171918] py-20 text-white sm:py-24"
    >
      <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div>
          <p className="section-label !text-[#a3b7a9]">
            Experience
          </p>

          <h2 className="font-[Manrope] text-[clamp(2.7rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.075em]">
            Working across
            <br />
            design and
            <br />
            technology.
          </h2>
        </div>

        <div className="border-t border-white/20">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="border-b border-white/20 py-6 sm:py-7"
            >
              <div className="flex justify-between gap-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#87938b]">
                <span>{experience.number}</span>
                <span>{experience.period}</span>
              </div>

              <h3 className="mt-6 font-[Manrope] text-2xl font-extrabold tracking-[-0.04em]">
                {experience.role}
              </h3>

              <p className="mt-2 text-sm font-bold text-[#a5b4aa]">
                {experience.company}
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#a1a7a1]">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}