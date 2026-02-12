import Image from "next/image";

export default function Emagrecimento() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGEM */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/emagrecimento.jpg"
            alt="Protocolo de emagrecimento saudável"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-background text-primary text-sm font-semibold">
            Protocolo de emagrecimento saudável
          </span>

          <h2 className="text-3xl font-bold text-primary mb-6">
            Emagrecer com saúde é sobre acompanhamento, não atalhos
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Nosso protocolo é feito com acompanhamento multidisciplinar,
            unindo especialistas para um tratamento individualizado,
            responsável e seguro, respeitando seu corpo, sua história
            e seus objetivos.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-8">
            <li>✔ Endocrinologista</li>
            <li>✔ Nutricionista</li>
            <li>✔ Psicólogo</li>
            <li>✔ Psiquiatra</li>
          </ul>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5561998701506"
              target="_blank"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primaryDark transition"
            >
              Agendar avaliação
            </a>

            <span className="text-sm text-gray-500">
              Atendemos <strong>+50 convênios</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
