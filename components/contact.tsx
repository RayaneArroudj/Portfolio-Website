"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>Contactez-moi</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Envoyez-moi un Email à{" "}
        <a className="underline" href="mailto:rayane.arroudj@gmail.com">
          rayane.arroudj@gmail.com
        </a>{" "}
        ou via le formulaire.{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-dark"
        action={async (FormData) => {
          const { data } = await sendEmail(FormData);

          if (data?.error) {
            toast.error(data.error.message);
            return;
          }
          toast.success("Email envoyé avec succès");
        }}
      >
        <input
          placeholder="Votre Email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Votre message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
