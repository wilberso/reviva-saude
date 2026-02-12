"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

      {/* 🔹 BARRA SUPERIOR */}
      <div className="bg-teal-600 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">

          <div>
            Quadra 44, Loja 06 • Setor Leste • Gama – DF
          </div>

          <div className="flex items-center gap-6">
            <span>
              WhatsApp: <strong>(61) 99870-1506</strong>
            </span>

            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @reviva_saudegama
            </a>
          </div>

        </div>
      </div>

      {/* 🔹 BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO + DESCRIÇÃO */}
        <div className="flex items-center gap-6">

          <Image
            src="/logo.jpg"
            alt="Reviva Saúde"
            width={140}
            height={60}
            className="object-contain"
            priority
          />

          <div className="hidden md:block max-w-md">
            <p className="text-base font-semibold text-teal-700 leading-snug">
              Clínica multidisciplinar com atendimento humanizado cuidando da sua saúde física e emocional.
            </p>
          </div>

        </div>

        {/* MENU + CTA */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#especialidades" className="hover:text-teal-600 transition">
              Especialidades
            </a>
            <a href="#convenios" className="hover:text-teal-600 transition">
              Convênios
            </a>
            <a href="#diferenciais" className="hover:text-teal-600 transition">
              Diferenciais
            </a>
            <a href="#contato" className="hover:text-teal-600 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
          >
            Agendar consulta
          </a>

        </div>

      </div>

    </header>
  );
}
