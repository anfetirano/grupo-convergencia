"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Mercados estratégicos",
  "Logística internacional",
  "Conectamos proveedores",
  "Operaciones globales",
  "Ejecución comercial",
  "Alianzas estratégicas",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    let timeout: ReturnType<typeof setTimeout>;

    // ESCRIBIENDO
    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    // PAUSA al final antes de borrar
    if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1100);
      return () => clearTimeout(timeout);
    }

    // BORRANDO
    if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 45);
      return () => clearTimeout(timeout);
    }

    // CAMBIO de frase cuando ya borró todo
    if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      setCharIndex(0); // ✅ reinicia para escribir la nueva frase
    }
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="relative">
      {text}
      <span className="ml-1 inline-block w-[2px] h-7 bg-yellow-400 animate-pulse align-middle" />
    </span>
  );
}

