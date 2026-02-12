const diferenciais = [
  "Equipe multidisciplinar",
  "Atendimento humanizado",
  "Estrutura moderna",
  "Localização acessível no Gama",
];

export default function Diferenciais() {
  return (
   <section id="diferenciais" className="py-20 px-6 bg-background">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Por que escolher a REVIVA?
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {diferenciais.map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow-sm text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
