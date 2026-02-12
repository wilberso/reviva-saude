const especialidades = [
  "Psiquiatria",
  "Psicologia",
  "Endocrinologia",
  "Ginecologia",
  "Fisioterapia",
  "Nutrição",
  "Pilates",
  "Estética",
];

export default function Especialidades() {
  return (
<section id="especialidades" className="py-20 px-6 bg-background">

      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Especialidades
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {especialidades.map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow-sm text-center font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
