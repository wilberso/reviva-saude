"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm z-50">

     {/* 🔹 BARRA SUPERIOR – PALETA REVIVA COM MEDALHA */}
<div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white text-[12px] md:text-xs">
  <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-3">

    {/* ESQUERDA – MEDALHA + ENDEREÇO */}
    <div className="flex items-center gap-4">

      {/* 🏅 Medalha Dourada Discreta */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-3 py-[3px] rounded-full text-[10px] font-semibold shadow-sm">
        
        <svg
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3 6 6 .9-4.5 4.4 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8z" />
        </svg>

        Excelência em Atendimento
      </div>

      {/* Endereço */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Quadra+44+Loja+06+Setor+Leste+Gama+DF"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block hover:opacity-90 transition"
      >
        Quadra 44 • Loja 06 • Gama – DF
      </a>

    </div>

    {/* DIREITA – CONTATOS */}
    <div className="flex items-center gap-6">

      <a
        href="tel:+5561998701506"
        className="hover:opacity-90 transition"
      >
        (61) 99870-1506
      </a>

      <a
        href="https://www.instagram.com/reviva_saudegama/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-90 transition"
      >
        @reviva_saudegama
      </a>

    </div>

  </div>
</div>


      {/* ===== BARRA PRINCIPAL ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        {/* MOBILE CENTRALIZADO */}
        <div className="flex flex-col md:hidden items-center justify-center gap-3 text-center">        

          <nav className="flex items-center justify-center gap-6 text-sm font-medium text-gray-600">
            <a href="#especialidades" className="hover:text-teal-700 transition">
              Especialidades
            </a>
            <a href="#emagrecimento" className="hover:text-teal-700 transition">
              Emagrecimento
            </a>
            <a href="#destaques" className="hover:text-teal-700 transition">
              Destaques
            </a>
            <a href="#contato" className="hover:text-teal-700 transition">
              Contato
            </a>
          </nav>

        </div>

        {/* DESKTOP (inalterado) */}
        <div className="hidden md:flex items-center justify-between">

          <div className="text-xl font-semibold text-teal-800 tracking-wide">
            Reviva Saúde
          </div>

          <nav className="flex items-center gap-10 text-sm font-medium text-gray-600">
            <a href="#especialidades" className="hover:text-teal-700 transition">
              Especialidades
            </a>
            <a href="#emagrecimento" className="hover:text-teal-700 transition">
              Emagrecimento
            </a>
            <a href="#destaques" className="hover:text-teal-700 transition">
              Destaques
            </a>
            <a href="#contato" className="hover:text-teal-700 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
          >
            Agendar
          </a>

        </div>
      </div>
    </header>
  );
}
