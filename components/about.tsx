"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with Btech degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, I decided to pursue my
        passion for UI/UX Design. I learned{" "}
        <span className="font-medium">UI/UX Design & Frontend Development</span>.{" "}
        <span className="font-medium">I am a Google Certified UX designer, an Okta Certified Professional</span> and <span className="font-medium">Auth0 Specialist.</span>{" "}
        <span className="italic">My favorite part of work is</span> design thinking, user research and problem solving. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My tech stacks
        are{" "}
        <span className="font-medium">
          React, Next.js, Node.js
        </span>
        . I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not designing</span>, I enjoy travelling,
        watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        studying about{" "}
        <span className="font-medium">history and astronomy</span>.
      </p>
    </motion.section>
  );
}
