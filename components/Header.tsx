"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm z-50">

      {/* 🔹 BARRA SUPERIOR – PALETA REVIVA */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white text-[12px] md:text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* ENDEREÇO */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Quadra+44+Loja+06+Setor+Leste+Gama+DF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 21s-6-5.4-6-10a6 6 0 1112 0c0 4.6-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2"/>
            </svg>
            Quadra 44 - Loja 06 - Gama/DF
          </a>

          {/* CONTATOS */}
          <div className="flex items-center gap-6">

            <a
              href="tel:+5561998701506"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 5z"/>
              </svg>
              (61) 99870-1506
            </a>

            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
              @reviva_saudegama
            </a>

          </div>
        </div>
      </div>

      {/* 🔹 BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">

        {/* LOGO + DESKTOP */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo4.png"
            alt="Reviva Saúde"
            width={60}
            height={60}
            className="object-contain"
          />
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
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
          >
            Agendar consulta
          </a>
        </div>

        {/* FRASE MOBILE */}
        <div className="md:hidden text-right">
          <p className="text-sm font-semibold text-teal-700">
            Cuidando da sua saúde com excelência e humanização
          </p>
        </div>

      </div>

    </header>
  );
}
