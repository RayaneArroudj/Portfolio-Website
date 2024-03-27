"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("about");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeading>{t("titre")}</SectionHeading>
      <p className="mb-3">
        {t("diplome")} <span className="font-medium">{t("commerce")}</span>
        {t("passion")} <span className="font-medium">{t("dev")}</span>.
        <span className="italic">{t("prefere")}</span>, {t("probleme")}
        <span className="underline">{t("sentiment")}</span>
        {t("solution")} <span className="font-medium">{t("stack")}</span>
        {t("apprendre")} <span className="font-medium">{t("poste")}</span>{" "}
        {t("web")}
      </p>

      <p>
        <span className="italic">{t("hesite")}</span>
        {t("contact")} <span className="font-medium">{t("moi")}</span>
      </p>
    </motion.section>
  );
}
function setActiveSection() {
  throw new Error("Function not implemented.");
}
