"use client";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="site-container grid gap-16 lg:grid-cols-[0.75fr_1fr] lg:gap-24 pb-4">
        <div>
          <p className="section-label">About me</p>

          <h2 className="font-[Manrope] text-[clamp(2.7rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.075em]">
            Design is not
            <br />
            just how it looks.
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-2xl leading-[1.6] text-[#313c35]">
            I&apos;m a Senior UX Designer with around six years of experience
            working on enterprise products, SaaS platforms, identity and
            access management, and complex administrative workflows.
          </p>

          <p className="mt-6 text-[15px] leading-8 text-neutral-500">
            At Verisk, I work within the Reimagine initiative, contributing to
            product experiences, ISO administration, global search, UX
            research, interaction design, and reusable UI components.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-neutral-500">
            Earlier in my career, I worked on identity and integration
            products, including experiences around Okta, Auth0, security
            assessment, and B2B SaaS platforms.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-neutral-500">
            My background in Computer Science and frontend development helps
            me collaborate closely with engineers and design experiences that
            are both useful for users and practical to build.
          </p>

          {/* <a href="/CV.pdf" target="_blank" className="button button-outline mt-7">
            View my résumé
            <span>↗</span>
          </a> */}
        </div>
      </div>
      <div className="mt-12 grid gap-8 site-container border-t border-[#deded8] pt-8 sm:grid-cols-2">
  <div>
    <p className="section-label">Education</p>

    <h3 className="font-[Manrope] text-lg font-extrabold">
      B.Tech in Computer Science Engineering
    </h3>

    <p className="mt-2 text-sm leading-6 text-neutral-500">
      Punjab Technical University
      <br />
      Completed in 2020
    </p>
  </div>

  <div>
    <p className="section-label">Certifications</p>

    <ul className="space-y-2 text-sm leading-6 text-neutral-500">
      <li>Okta Certified Professional</li>
      <li>Auth0 Specialist</li>
      <li>Google UX Design Certificate</li>
    </ul>
  </div>
</div>
    </section>
  );
}