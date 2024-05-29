import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import poshlorScreely from "@/public/poshlor_screely.png";
import portfolioScreely from "@/public/portfolio_screely.png";
import chesskeyScreely from "@/public/chesskey_screely.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "First Internship",
    location: "Rendezview",
    description:
      "Hired as first intern to help the product team use data to understand different pain points along user journeys.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - June 2021",
  },
  {
    title: "Full Stack Software Engineer",
    location: "Develop For Good, Stanford University",
    description:
      "Increased monthly donation volume by 29% by developing a responsive round-up modal for a merchant’s storefront allowing customers to round up purchases for charity, using React and Shopify Liquid.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2021 - January 2022",
  },
  {
    title: "Graduated From College",
    location: "University of California, Berkeley",
    description:
      "Graduated from UC Berkeley with a B.S. in Electrical Engineering and Computer Science, and a minor in Data Science. Open to any full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Poshlor",
    description:
      "Designed and developed Poshlor, a Chrome extension for faster Poshmark closet sorting based on color themes",
    tags: ["Typescript", "Chrome Ext. API", "Flask", "MongoDB", "Python", "HTMl/CSS"],
    imageUrl: poshlorScreely,
  },
  {
    title: "ChessKey",
    description:
      "Built a full-stack chess web app that allows users to quickly instantiate chess games with a shareable link.",
    tags: ["Python", "Flask", "WebSockets", "PostgreSQL", "Tailwind", "JS", "HTML/CSS"],
    imageUrl: chesskeyScreely,
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal website to showcase my past projects and experiences. Shoot me a message below!",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Framer Motion", "Resend"],
    imageUrl: portfolioScreely,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "Javascript",
  "SQL",
  "Go",
  "Node.js",
  "Next.js",
  "Flask",
  "React",
  "HTML/CSS",
  "WebSockets",
  "PostgreSQL",
  "Express",
  "Framer Motion",
  "UI/UX Design",
  "Git",
  "NumPy",
  "GCP",
] as const;