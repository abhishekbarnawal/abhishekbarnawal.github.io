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
    title: "Senior UI/UX Designer",
    location: "BeyondId, Kathmandu, NP",
    description:
    "I'm working as a Senior UI/UX Designer. I provide technical leadership and guidance to our frontend team, leverage new technologies to provide amazing user experience. I work closely with stakeholders, clients, PMs and development team to ensure great product experience and solutions. I work for sectors such as: healthcare, educational, retail & enterprise solutions. My stack includes Next.js, Tailwind CSS, Google Material Design. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb, 2022 - present",
  },
  {
    title: "Lead UI/UX Designer",
    location: "AITC International, Kathmandu, NP",
    description:
    "I worked as a Lead UI/UX Designer for 1 year here.I designed Several Web Applications in MERN Stack and learned CSS and JS animations.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "UI/UX Designer",
    location: "Web House Nepal, Kathmandu, NP",
    description:
      "I worked as a UI/UX Designer for 2 years here. I also upskilled to the Frontend development and build websites for various B2C sectors",
      icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
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
  "Human-Centered Design(HCD)",
  "User Experience Design",
  "Product Design",
  "Visual Design",
  "High Fidelity Design & Prototype",
  "Product Strategy",
  "Collaboration and Communication",
  "Usability Testing and Iteration",
  "Design Systems",
  "Technical Proficiency(HTML, CSS, Typescript)",
  "Leadership and Mentorship",
] as const;
