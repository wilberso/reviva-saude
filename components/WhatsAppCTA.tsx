import Image from "next/image";
export default function WhatsAppCTA() {
  return (
    <section
      id="contato"
      className="relative py-28 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      {/* DECORAÇÃO SUAVE */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 blur-3xl rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 blur-3xl rounded-full opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto">

 <div className="text-center mb-16 flex flex-col items-center">

  {/* LINHA DECORATIVA SUTIL */}
  <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Venha nos fazer uma visita
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Atendimento humanizado, estrutura moderna e profissionais especializados.
            Estamos prontos para cuidar da sua saúde física e emocional.
          </p>
        </div>

        {/* BOTÕES PRINCIPAIS */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition flex items-center gap-3"
          >
            {/* Ícone moderno */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.8-1-2.5-.3-.7-.6-.6-.7-.6h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.7 2.5 1.1 2.5.7 3 .7.5 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
            </svg>
            Agendar pelo WhatsApp
          </a>

          {/* MAPA */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Quadra+44,+Loja+06,+Setor+Leste,+Gama,+DF"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-700 text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-700 hover:text-white transition flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M12 21s-6-5.4-6-10a6 6 0 1112 0c0 4.6-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2"/>
            </svg>
            Ver no mapa
          </a>

        </div>

        {/* GRID INSTITUCIONAL PREMIUM */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          {/* ENDEREÇO */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4 text-lg">
              Endereço
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Quadra 44, Loja 06<br />
              Setor Leste<br />
              Gama – Distrito Federal<br />
              CEP 72440-440
            </p>
          </div>

          {/* TELEFONE */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4 text-lg">
              Central de Atendimento
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              Agendamentos e informações:
            </p>
            <p className="font-semibold text-teal-700 text-lg">
              (61) 99870-1506
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Atendimento via WhatsApp
            </p>
          </div>

          {/* INSTAGRAM */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4 text-lg">
              Redes Sociais
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              Conteúdos sobre saúde e qualidade de vida.
            </p>
            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 hover:underline"
            >
              @reviva_saudegama
            </a>
          </div>

          {/* HORÁRIO */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4 text-lg">
              Horário de Funcionamento
            </h3>
            <p className="text-slate-600 text-sm">
              Segunda a Sexta<br />
              08:00 às 18:00
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Atendimento mediante agendamento
            </p>
          </div>

        </div>

        {/* MAPA EMBUTIDO PREMIUM */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <iframe
            src="https://www.google.com/maps?q=Quadra+44,+Loja+06,+Setor+Leste,+Gama,+DF&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
