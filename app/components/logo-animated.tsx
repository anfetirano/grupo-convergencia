"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoAnimated() {
  return (
    <div
      className="mx-auto"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ rotateY: [ -12, 12, -12 ] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src="/Logosinfondo.png"
          alt="Grupo Convergencia"
          width={420}   // ⬅️ antes ~220–240
          height={420}
          priority
          className="mx-auto"
        />
      </motion.div>
    </div>
  );
}
