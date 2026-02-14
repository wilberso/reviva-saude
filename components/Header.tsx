"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm z-50">

      {/* ===== BARRA SUPERIOR ===== */}
      <div className="bg-teal-700 text-white text-[11px] md:text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Quadra+44+Loja+06+Setor+Leste+Gama+DF"
            target="_blank"
            className="hover:opacity-90 transition"
          >
            Quadra 44, Loja 06 • Gama – DF
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/5561998701506"
              target="_blank"
              className="hover:opacity-90 transition"
            >
              (61) 99870-1506
            </a>

            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              className="hover:opacity-90 transition"
            >
              @reviva_saudegama
            </a>
          </div>
        </div>
      </div>

      {/* ===== BARRA PRINCIPAL ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo4.png"
            alt="Reviva Saúde"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="leading-tight">
            
            <p className="text-[11px] text-gray-400 tracking-widest uppercase">
              Excelência em cuidado integral
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
            {["Especialidades", "Emagrecimento", "Destaques", "Contato"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative group transition"
                >
                  <span className="group-hover:text-teal-700 transition">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-teal-600 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>
 
          {/* BOTÃO PREMIUM */}
          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            className="relative bg-gradient-to-r from-teal-600 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition"
          >
            Agendar consulta
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-teal-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== MENU MOBILE ===== */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-8 space-y-6 text-center animate-fadeIn">

          {["Especialidades", "Emagrecimento", "Destaques", "Contato"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-teal-600 text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            className="block bg-gradient-to-r from-teal-600 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-md"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  );
}
