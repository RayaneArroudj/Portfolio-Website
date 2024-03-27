import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { useTranslations } from "next-intl";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export default function useData() {
  const t = useTranslations();

  const links = [
    {
      name: t("data.Acceuil"),
      hash: "#home",
    },
    {
      name: t("data.Apropos"),
      hash: "#about",
    },
    {
      name: t("data.Projets"),
      hash: "#projects",
    },
    {
      name: t("data.Competences"),
      hash: "#skills",
    },
    {
      name: t("data.Experience"),
      hash: "#experience",
    },
    {
      name: t("data.Contact"),
      hash: "#contact",
    },
  ] as const;

  const experiencesData = [
    {
      title: t("data.orange.title"),
      location: "Nice, France",
      description: t("data.orange.description"),
      icon: React.createElement(CgWorkAlt),
      date: "2022 - 2023",
    },
    {
      title: t("data.concept.title"),
      location: "Lyon, France",
      description: t("data.concept.description"),
      icon: React.createElement(LuGraduationCap),
      date: "2022 - 2023",
    },
    {
      title: t("data.locab.title"),
      location: "Lyon, France",
      description: t("data.locab.description"),
      icon: React.createElement(CgWorkAlt),
      date: " - 2022 -",
    },
    {
      title: t("data.devweb.title"),
      location: "Lyon, France",
      description: t("data.devweb.description"),
      icon: React.createElement(LuGraduationCap),
      date: "- 2022 - ",
    },
  ] as const;

  const projectsData = [
    {
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: corpcommentImg,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: wordanalyticsImg,
    },
  ] as const;

  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "postgreSQL",
    "GraphQL",
    "Apollo",
    "Express",
    "Framer Motion",
    "Elasticsearch",
    "Docker",
    "Gitlab CI/CD",
  ] as const;

  return {
    skillsData,
    projectsData,
    experiencesData,
    links,
  };
}
