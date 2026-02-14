import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16 md:pb-24">


      {/* BLOCO SUPERIOR: IMAGEM + TEXO */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

  {/* ESQUERDA: IMAGEM */}
  <div className="flex justify-end md:justify-center">
    <Image
      src="/convenio.jpg"
      alt="Reviva Saúde"
      width={320}
      height={200}
      className="rounded-2xl shadow-md object-cover"
      priority
    />
  </div>

  {/* DIREITA: TEXTO */}
  <div>
    <span className="inline-block mb-4 px-4 py-2 rounded-full bg-gray-100 text-teal-600 text-sm font-semibold">
      Clínica Multidisciplinar • Gama – DF
    </span>

    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-teal-700 leading-tight mb-6">
      Saúde física, mental e bem-estar
      <br />
      em um só lugar
    </h1>

    <p className="text-lg text-gray-600 mb-8">
      Atendimento humanizado com profissionais especializados,
      estrutura moderna e cobertura por mais de 50 convênios.
    </p>

    <div className="flex flex-wrap items-center gap-6">
      <a
        href="https://wa.me/5561998701506"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition"
      >
        Agendar consulta
      </a>

      <span className="text-sm text-gray-500">
        WhatsApp <strong>(61) 99870-1506</strong>
      </span>
    </div>
  </div>

</div>


        {/* CAIXAS INFERIORES */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {/* ESPECIALIDADES */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-teal-700 mb-4">
              Especialmente para você
            </h3>
           <div className="flex justify-end md:justify-center">
    <Image
      src="/novosconvenios.jpg"
      alt="Reviva Saúde"
      width={320}
      height={200}
      className="rounded-2xl shadow-md object-cover"
      priority
    />
  </div>
          </div>

          {/* CONVÊNIOS */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-teal-700 mb-4">
              Cuidados
            </h3>
            <div className="flex justify-end md:justify-center">
    <Image
      src="/endocrino.jpg"
      alt="Reviva Saúde"
      width={320}
      height={200}
      className="rounded-2xl shadow-md object-cover"
      priority
    />
  </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-teal-700 mb-4">
              Especialidades
            </h3>
           <div className="flex justify-end md:justify-center">
    <Image
      src="/carbox.jpg"
      alt="Reviva Saúde"
      width={320}
      height={200}
      className="rounded-2xl shadow-md object-cover"
      priority
    />
  </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-teal-700 mb-4">
                Sua pele vai agradecer
              </h3>
             <div className="flex justify-end md:justify-center">
    <Image
      src="/dermatologista.jpg"
      alt="Reviva Saúde"
      width={320}
      height={200}
      className="rounded-2xl shadow-md object-cover"
      priority
    />
  </div>
            </div>
            <a
              href="https://www.instagram.com/reviva_saudegama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold text-sm hover:underline"
            >
              @reviva_saudegama →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
