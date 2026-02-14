export default function WhatsAppCTA() {
  return (
    <section
      id="contato"
      className="relative bg-white pt-20 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO INSTITUCIONAL */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-teal-600 mx-auto mb-6 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 tracking-tight mb-6">
            Venha nos fazer uma visita
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Atendimento humanizado, estrutura moderna e profissionais especializados.
            Estamos prontos para cuidar da sua saúde física e emocional com excelência.
          </p>
        </div>

        {/* BOTÕES PRINCIPAIS */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">

          <a
            href="https://wa.me/5561998701506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-md font-semibold transition"
          >
            Agendar pelo WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Quadra+44,+Loja+06,+Setor+Leste,+Gama,+DF"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-600 text-teal-700 px-8 py-4 rounded-md font-semibold hover:bg-teal-600 hover:text-white transition"
          >
            Ver no mapa
          </a>

        </div>

        {/* GRID INSTITUCIONAL */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ENDEREÇO */}
          <div className="space-y-4">
            <h3 className="text-slate-800 font-semibold text-lg">
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
          <div className="space-y-4">
            <h3 className="text-slate-800 font-semibold text-lg">
              Central de Atendimento
            </h3>
            <p className="text-slate-600 text-sm">
              Agendamentos e informações
            </p>
            <p className="text-teal-700 font-semibold text-lg">
              (61) 99870-1506
            </p>
          </div>

          {/* REDES */}
          <div className="space-y-4">
            <h3 className="text-slate-800 font-semibold text-lg">
              Redes Sociais
            </h3>
            <p className="text-slate-600 text-sm">
              Conteúdos sobre saúde e qualidade de vida.
            </p>
            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 font-semibold hover:underline"
            >
              @reviva_saudegama
            </a>
          </div>

          {/* HORÁRIO */}
          <div className="space-y-4">
            <h3 className="text-slate-800 font-semibold text-lg">
              Horário de Funcionamento
            </h3>
            <p className="text-slate-600 text-sm">
              Segunda a Sexta<br />
              08:00 às 18:00
            </p>
            <p className="text-slate-500 text-xs">
              Atendimento mediante agendamento
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
