"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeading>A propos de moi :</SectionHeading>
      <p className="mb-3">
        Titulaire d'un diplôme en{" "}
        <span className="font-medium">Commerce international</span>, j'ai décidé
        de poursuivre ma passion pour la programmation. Je me suis inscrit à un
        bootcamp et j'ai appris le{" "}
        <span className="font-medium">développement web full-stack</span>.
        <span className="italic">Ce que je préfère dans la programmation</span>,
        c'est l'aspect résolution de problèmes. J'aime{" "}
        <span className="underline">le sentiment</span> lorsque je trouve enfin
        une solution à un problème. Ma stack principal est composé de{" "}
        <span className="font-medium">
          React, Next.js, Node.js, postgreSQL et elasticsearch
        </span>
        Je suis toujours à la recherche de nouvelles technologies à apprendre.
        Je suis actuellement à la recherche d'un{" "}
        <span className="font-medium">poste à temps plein</span> en tant que
        développeur web.
      </p>

      <p>
        <span className="italic">N'hésitez pas</span> à me contacter pour en{" "}
        <span className="font-medium">apprendre plus sur moi.</span>
      </p>
    </motion.section>
  );
}
function setActiveSection() {
  throw new Error("Function not implemented.");
}
