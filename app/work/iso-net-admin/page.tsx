import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    src: "/images/iso-net-admin-01.png",
    alt: "Redacted ISO Net Administration user management interface",
    caption: "User administration and account management",
  },
  {
    src: "/images/iso-net-admin-02.png",
    alt: "Redacted ISO Net Administration invitation workflow",
    caption: "Inviting and managing administrators",
  },
  {
    src: "/images/iso-net-admin-03.png",
    alt: "Redacted ISO Net Administration product and permission interface",
    caption: "Product access and permission management",
  },
  {
    src: "/images/iso-net-admin-4.png",
    alt: "Redacted ISO Net Administration import workflow",
    caption: "Import and validation workflow",
  },
];

export default function IsoNetAdminPage() {
  return (
    <main className="bg-[#f7f8f4] text-[#172018] dark:bg-[#111511] dark:text-white">
      <div className="site-container max-w-6xl py-12 sm:py-20">
        {/* Back link */}
        <Link
          href="/#works"
          className="text-sm font-bold text-neutral-500 transition hover:text-[#244b3d] dark:text-white/60 dark:hover:text-white"
        >
          ← Back to selected work
        </Link>

        {/* Hero */}
        <header className="mt-12 max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-400">
            Enterprise UX · Administration
          </p>

          <h1 className="mt-5 max-w-4xl font-[Manrope] text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.07em]">
            ISO Net
            <br />
            Administration
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 dark:text-white/65">
            A focused administration experience designed to make user,
            product, and access management clearer and more efficient across
            an enterprise platform.
          </p>
        </header>

        {/* Main project image */}
        {/* <div className="mx-auto mt-12 max-w-5xl">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    {screenshots.map((screenshot) => (
      <figure key={screenshot.src} className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={1600}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </div>

        <figcaption className="mt-3 text-left text-sm leading-6 text-zinc-500">
          {screenshot.caption}
        </figcaption>
      </figure>
    ))}
  </div>
</div> */}

        {/* Project details */}
        <section className="mt-20 grid gap-10 border-y border-black/10 py-10 dark:border-white/10 md:grid-cols-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-neutral-400">
              Role
            </p>

            <p className="mt-3 text-base font-bold">
              UX / Product Design
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-neutral-400">
              Focus
            </p>

            <p className="mt-3 text-base font-bold">
              Administration and access management
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-neutral-400">
              Platform
            </p>

            <p className="mt-3 text-base font-bold">
              Enterprise SaaS
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="mt-20 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-[Manrope] text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
            Overview
          </h2>

          <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-white/65">
            <p>
              ISO Net Administration supports administrative tasks across an
              enterprise environment. The experience brings together
              user-related actions, access management, and administrative
              workflows in one place.
            </p>

            <p>
              The design focus was to reduce friction in complex workflows,
              improve clarity, and make important actions easier to understand
              and complete.
            </p>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mt-20 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-[Manrope] text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
            What I worked on
          </h2>

          <ul className="space-y-4 text-base leading-8 text-neutral-600 dark:text-white/65">
            <li>• User and administrator management workflows</li>
            <li>• Product and access-related experiences</li>
            <li>• Information hierarchy and interaction patterns</li>
            <li>• Form, validation, and error-state considerations</li>
            <li>• Enterprise UI consistency and usability</li>
          </ul>
        </section>

        {/* Interface exploration */}
        <section className="mt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-400">
              Interface exploration
            </p>

            <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">
              Designed for clearer administration.
            </h2>

            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-white/65">
              Selected interface views are shown below with sensitive
              information removed or replaced for portfolio presentation.
            </p>
          </div>

          {/* Screenshot gallery */}
{/* Screenshot gallery */}
<div className="mx-auto mt-12 max-w-5xl">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    {screenshots.map((screenshot) => (
      <figure key={screenshot.src} className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-2 dark:border-white/10 dark:bg-white/[0.05] sm:p-4">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={1600}
            height={1000}
            className="h-auto w-full rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <figcaption className="mt-4 text-sm font-bold leading-6 text-neutral-500 dark:text-white/60">
          {screenshot.caption}
        </figcaption>
      </figure>
    ))}
  </div>
</div>
        </section>

        {/* Design considerations */}
        <section className="mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-[Manrope] text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
            Design considerations
          </h2>

          <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-white/65">
            <p>
              Administrative products often contain dense information and
              high-impact actions. The interface therefore needs to balance
              efficiency with clarity.
            </p>

            <p>
              The work focused on making system status, available actions,
              permissions, and validation feedback easier to understand while
              maintaining a consistent enterprise design language.
            </p>
          </div>
        </section>

        {/* Closing section */}
        {/* <section className="mt-24 rounded-3xl bg-[#e7ece3] p-8 dark:bg-white/[0.08] sm:p-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-400">
            Closing note
          </p>

          <h2 className="mt-4 max-w-2xl font-[Manrope] text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Making complex enterprise administration feel simpler.
          </h2>
        </section> */}

        {/* Bottom link */}
        <div className="mt-12">
          <Link
            href="/#works"
            className="text-sm font-extrabold transition hover:text-[#244b3d]"
          >
            ← Back to selected work
          </Link>
        </div>
      </div>
    </main>
  );
}