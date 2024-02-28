import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aitc from "@/public/aitc.png"
import zpa from "@/public/zpa.png"
import gamemano from "@/public/gamemano.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Ludhiana, India",
    description:
      "I graduated with Btech CSE. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Engineer",
    location: "Web House Nepal, Kathmandu, NP",
    description:
      "I worked as a front-end engineer for 2 years here. I also upskilled to the UI/UX Designing.",
      icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Lead UI/UX Designer",
    location: "AITC International, Kathmandu, NP",
    description:
      "I worked as a UI/UX Designer for 1 year here. I learned animations and game designing here.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "UI/UX Designer",
    location: "BeyondId, Kathmandu, NP",
    description:
      "I'm now a UI/UX developer. I do UI/UX Designing and React Development. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Zero Trust Platform",
    description:
      "A security assessment portal to discover, manage and recommend identity based solutions to organizations and make them future secured and agile proof.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: zpa,
  },
  {
    title: "Game Mano",
    description:
      "A Game Development Service Providing company.",
    tags: ["React", "MongoDB","Express", "Lottie"],
    imageUrl: gamemano,
  },
  {
    title: "AITC Website",
    description:
      "Complete redesigning of a software company using Figma, Lottie Animations. Technologies Used: MERN Stack. UI Library: Ant Design",
    tags: ["React", "Lottie Animations", "SQL", "Ant Design"],
    imageUrl: aitc,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "UI/UX Design",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
