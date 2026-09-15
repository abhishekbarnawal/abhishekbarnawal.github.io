"use client";

import { motion } from "framer-motion";
import {
  BsSearch,
  BsCompass,
  BsLayers,
  BsCheck2Circle,
  BsArrowRight,
} from "react-icons/bs";

const processSteps = [
  {
    number: "01",
    icon: BsSearch,
    title: "Discover & Understand",
    description:
      "I start by understanding the business context, user needs, product goals, and existing pain points before jumping into solutions.",
    points: [
      "Stakeholder interviews",
      "User research and journey mapping",
      "Competitive and product analysis",
    ],
  },
  {
    number: "02",
    icon: BsCompass,
    title: "Define the Problem",
    description:
      "I translate research and business requirements into clear problem statements, user flows, and measurable product opportunities.",
    points: [
      "Problem definition",
      "Information architecture",
      "User flows and prioritization",
    ],
  },
  {
    number: "03",
    icon: BsLayers,
    title: "Design & Validate",
    description:
      "I create simple, scalable experiences through wireframes, prototypes, interaction design, and iterative usability validation.",
    points: [
      "Wireframes and high-fidelity UI",
      "Interactive prototypes",
      "Usability testing and iteration",
    ],
  },
  {
    number: "04",
    icon: BsCheck2Circle,
    title: "Deliver & Improve",
    description:
      "I collaborate closely with product and engineering teams to deliver quality experiences and continuously improve the product after launch.",
    points: [
      "Design systems and documentation",
      "Developer collaboration",
      "Product feedback and iteration",
    ],
  },
];

export default function DesignProcess() {
  return (
    <motion.section
      id="approach"
      className="
        mx-auto
        w-full
        max-w-[60rem]
        scroll-mt-24
        pb-16
        sm:pb-20
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section heading */}
      <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-400">
          My approach
        </p>

        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
          A thoughtful process for{" "}
          <span className="italic">better products.</span>
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white/60 sm:text-base sm:leading-7">
          I use a human-centered and product-focused approach to simplify
          complex SaaS workflows, align user needs with business goals, and
          create experiences that are useful, scalable, and measurable.
        </p>
      </div>

      {/* Process cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.08]
                bg-white
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:hover:bg-white/[0.07]
                sm:p-7
              "
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-2 -top-5 text-[7rem] font-bold leading-none text-gray-950/[0.035] dark:text-white/[0.035]">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-lg text-white dark:bg-white dark:text-gray-950">
                    <Icon aria-hidden="true" />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.18em] text-gray-400 dark:text-white/30">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {step.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-white/60">
                  {step.description}
                </p>

                <ul className="space-y-2.5">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-white/75"
                    >
                      <BsCheck2Circle className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Closing statement */}
      <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl bg-gray-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:px-7">
        <div>
          <p className="text-base font-semibold sm:text-lg">
            Design with clarity. Build with purpose.
          </p>

          <p className="mt-1 text-sm leading-6 text-white/60">
            From early discovery to shipped SaaS experiences.
          </p>
        </div>

        <a
          href="#work"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-950 transition hover:scale-[1.03]"
        >
          View selected work
          <BsArrowRight
            aria-hidden="true"
            className="transition group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.section>
  );
}