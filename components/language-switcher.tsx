"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const localeActive = useLocale();
  const t = useTranslations("language-switcher");

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push(`/${nextLocale}`);
  };

  return (
    <motion.section
      className="fixed top-20 right-14 w-[3rem] h-[3rem] flex"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.select
        className="rounded-xl dark:bg-gray-950 px-0.5 hover:scale-[1.15] active:scale-105 transition-all "
        defaultValue={localeActive}
        onChange={onSelectChange}
      >
        <option value="fr">{t("fr")}</option>
        <option value="en">{t("en")}</option>
      </motion.select>
    </motion.section>
  );
}
