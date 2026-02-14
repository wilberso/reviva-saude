"use client";

import { useState } from "react";
import Image from "next/image";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">

      {/* 🔹 BARRA SUPERIOR */}
      <div className="bg-teal-600 text-white text-[11px] md:text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* MAPS */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Quadra+44+Loja+06+Setor+Leste+Gama+DF"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            {/* Map Icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21s-6-5.4-6-10a6 6 0 1112 0c0 4.6-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2"/>
            </svg>
            Quadra 44, Loja 06 • Gama – DF
          </a>

          <div className="flex items-center gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/5561998701506"
              target="_blank"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.8-1-2.5-.3-.7-.6-.6-.7-.6h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.7 2.5 1.1 2.5.7 3 .7.5 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
              </svg>
              (61) 99870-1506
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
              @reviva_saudegama
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

         <div className="flex items-center gap-3">
 {/* Logo pequena controlada */}
          <Image
            src="/logo-Reviva.png"
            alt="Reviva Saúde"
            width={52}
            height={52}
            className="object-contain"
          />
    </div>
   

        

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#especialidades" className="hover:text-teal-600 transition">
              Especialidades
            </a>
            <a href="#emagrecimento" className="hover:text-teal-600 transition">
              Emagrecimento
            </a>
            <a href="#destaque" className="hover:text-teal-600 transition">
              Destaques
            </a>
            <a href="#contato" className="hover:text-teal-600 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
          >
            Agendar consulta
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-2xl text-teal-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 🔹 MENU MOBILE PREMIUM */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-6 space-y-6 text-center animate-fadeIn">

          <a href="#especialidades" className="block text-gray-700 hover:text-teal-600 text-lg">
            Especialidades
          </a>

          <a href="#emagrecimento" className="block text-gray-700 hover:text-teal-600 text-lg">
            Emagrecimento
          </a>

          <a href="#destaque" className="block text-gray-700 hover:text-teal-600 text-lg">
            Destaques
          </a>

          <a href="#contato" className="block text-gray-700 hover:text-teal-600 text-lg">
            Contato
          </a>

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            className="block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  );
}
