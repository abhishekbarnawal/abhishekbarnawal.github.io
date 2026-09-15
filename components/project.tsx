"use client";

import { useRef } from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projects)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.96, 1]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, 1]
  );

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0"
    >
      <section
        className="
          relative
          isolate
          overflow-hidden
          rounded-2xl
          border
          border-black/[0.07]
          bg-[#f1f3ee]
          transition-colors
          duration-300
          hover:bg-[#e9ede5]
          dark:border-white/10
          dark:bg-white/[0.06]
          dark:hover:bg-white/[0.1]
          sm:min-h-[22rem]
          lg:min-h-[25rem]
        "
      >
        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            px-6
            py-8
            sm:max-w-[52%]
            sm:px-8
            sm:py-10
            lg:px-10
          "
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
            Selected project
          </p>

          <h3 className="text-2xl font-semibold tracking-tight text-[#172018] dark:text-white sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-black/65 dark:text-white/65 sm:text-base">
            {description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-auto sm:pt-8">
            {tags.map((tag, index) => (
              <li
                key={`${tag}-${index}`}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-white/60
                  px-3
                  py-1.5
                  text-[0.68rem]
                  font-medium
                  uppercase
                  tracking-wider
                  text-black/65
                  dark:border-white/10
                  dark:bg-white/10
                  dark:text-white/70
                "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="
            relative
            mt-4
            px-5
            pb-5
            sm:absolute
            sm:inset-y-8
            sm:right-[-7rem]
            sm:mt-0
            sm:w-[55%]
            sm:px-0
            sm:pb-0
            lg:right-[-5rem]
            lg:w-[58%]
          "
        >
          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-black/10
              bg-white
              shadow-[0_20px_60px_rgba(28,39,30,0.16)]
              transition-transform
              duration-500
              ease-out
              group-hover:-translate-x-3
              group-hover:translate-y-2
              group-hover:rotate-[-2deg]
              group-hover:scale-[1.03]
              dark:border-white/10
            "
          >
            <Image
              src={imageUrl}
              alt={`${title} project preview`}
              width={900}
              height={650}
              quality={95}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </motion.article>
  );
}