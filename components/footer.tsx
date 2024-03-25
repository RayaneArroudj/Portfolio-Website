export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">
        &copy; 2030 rayane Arroudj. Tout droits réservés
      </small>
      <p className="text-xs block gap-1 ">
        <span className="font-semibold text-center">
          A propos de ce site web:
        </span>{" "}
        construit avec React & Next.js (App Router & Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, et
        hébergé sur Vercel.
      </p>
    </footer>
  );
}
