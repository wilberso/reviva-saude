const diferenciais = [
  "Equipe multidisciplinar",
  "Atendimento humanizado",
  "Estrutura moderna",
  "Localização acessível no Gama",
];

export default function Diferenciais() {
  const items = [
    {
      title: "Equipe Multidisciplinar",
      desc: "Profissionais especializados atuando de forma integrada para um cuidado completo.",
      icon: "👩‍⚕️"
    },
    {
      title: "Atendimento Humanizado",
      desc: "Escuta ativa, respeito à sua história e foco nas suas necessidades.",
      icon: "🤝"
    },
    {
      title: "Estrutura Moderna",
      desc: "Ambiente confortável, tecnologia atualizada e atendimento seguro.",
      icon: "🏥"
    },
    {
      title: "Localização Estratégica",
      desc: "Fácil acesso no Gama – DF, com comodidade para você.",
      icon: "📍"
    }
  ];

  return (
    <section
      id="diferenciais"
      className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Por que escolher a Reviva?
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
