"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#e8e9e1] py-20 sm:py-24"
    >
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div>
          <p className="section-label">Contact</p>

          <h2 className="font-[Manrope] text-[clamp(2.7rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.075em]">
            Have a product
            <br />
            problem to solve?
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-500 sm:mt-8">
            Whether you want to discuss a design opportunity, product
            challenge, collaboration, or just exchange ideas, feel free to
            reach out.
          </p>
        </div>

        <div className="pt-0 lg:pt-2">
          <a
            href="mailto:abhishekbarnawal37@gmail.com"
            className="flex items-center gap-3 break-all font-[Manrope] text-xl font-extrabold tracking-[-0.04em] md:text-2xl"
          >
            <span>abhishekbarnawal37@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="my-7 h-px bg-[#cdd0c7] sm:my-8" />

          <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-neutral-400">
            Based in
          </p>

          <p className="mt-2 text-base font-bold">
            Kathmandu, Nepal
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 sm:mt-10">
            <a
              href="https://www.linkedin.com/in/abhishek-barnawal/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-[#bfc4ba] pb-2 text-sm font-extrabold transition-opacity hover:opacity-60"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://dribbble.com/abhishek_barnawal"
              target="_blank"
              rel="noreferrer"
              className="border-b border-[#bfc4ba] pb-2 text-sm font-extrabold transition-opacity hover:opacity-60"
            >
              Dribbble ↗
            </a>

            <a
              href="https://www.behance.net/abhishekbarnawal"
              target="_blank"
              rel="noreferrer"
              className="border-b border-[#bfc4ba] pb-2 text-sm font-extrabold transition-opacity hover:opacity-60"
            >
              Behance ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}