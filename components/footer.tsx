"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171918] text-[#a3aaa3]">
      <div className="site-container py-10">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#top"
              className="font-[Manrope] text-4xl font-extrabold tracking-[-0.08em] text-white"
            >
              AB<span className="text-[#9ab8a4]">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#929b94]">
              Senior UX Designer focused on enterprise products, SaaS
              platforms, complex workflows, and thoughtful digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-8 text-sm">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#69766d]">
                Explore
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#works"
                  className="transition-colors hover:text-white"
                >
                  Work
                </a>

                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </a>

                <a
                  href="#capabilities"
                  className="transition-colors hover:text-white"
                >
                  Capabilities
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#69766d]">
                Connect
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/abhishek-barnawal/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://dribbble.com/abhishek_barnawal"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Dribbble ↗
                </a>

                <a
                  href="mailto:abhishekbarnawal37@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-[#69766d] md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Abhishek Barnawal. All rights reserved.
          </p>

          <p>
            Designed &amp; built with React, Next.js and Tailwind CSS.
          </p>

          <a
            href="#top"
            className="font-bold text-[#c2ccc4] transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}