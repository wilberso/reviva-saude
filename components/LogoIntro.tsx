"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoIntro() {
  const [phase, setPhase] = useState<"blue" | "gold" | "hide">("blue");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("gold"), 1200);
    const t2 = setTimeout(() => setPhase("hide"), 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "hide") return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-[#f8fafc] to-[#eef5f4] transition-opacity duration-700">

      <div className="relative flex items-center justify-center">

        {/* Logo Azul */}
        <Image
          src="/logo4.png" 
          alt="Reviva Saúde"
          width={320}
          height={320}
          className={`absolute transition-all duration-1000 ${
            phase === "blue"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 blur-sm"
          }`}
        />

        {/* Logo Dourada */}
        <Image
          src="/logo-dourada.png"
          alt="Reviva Saúde Dourada"
          width={320}
          height={320}
          className={`transition-all duration-1000 ${
            phase === "gold"
              ? "opacity-100 scale-100 animate-goldShine"
              : "opacity-0 scale-95"
          }`}
        />
      </div>
    </div>
  );
}
