"use client";

import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="works" className="py-20 sm:py-24">
      <div className="site-container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="section-label">Selected work</p>

            <h2 className="mt-4 font-[Manrope] text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.075em] text-[#172018] dark:text-white">
              A few things
              <br />
              I&apos;ve worked on.
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-7 text-neutral-500 dark:text-white/60">
            A selection of enterprise products, SaaS platforms, security
            experiences, and design-system work.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {projects.map((project, index) => (
            <article key={project.id} className="group">
              <a
                href={project.url}
                aria-label={`View ${project.title}`}
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#efeee7]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      saturate-[0.7]
                      transition
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                      group-hover:saturate-100
                    "
                  />

                  <div className="absolute inset-0 bg-black/[0.02] transition duration-500 group-hover:bg-transparent" />
                </div>
              </a>

              <div className="pt-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-neutral-400">
                  {project.category}
                </p>

                <h3 className="mt-3 font-[Manrope] text-2xl font-extrabold tracking-[-0.05em] text-[#172018] dark:text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-lg text-[15px] leading-7 text-neutral-500 dark:text-white/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#deded8]
                        px-3
                        py-2
                        text-[11px]
                        font-bold
                        text-neutral-500
                        transition
                        group-hover:border-[#c9d1c6]
                        dark:border-white/15
                        dark:text-white/60
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-extrabold
                    text-[#172018]
                    transition
                    hover:gap-3
                    dark:text-white
                  "
                >
                  View project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}