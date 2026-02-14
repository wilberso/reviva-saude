import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-white">

      {/* DECORAÇÃO SUAVE */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-8 md:pb-12">

        {/* BLOCO PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">

          {/* IMAGEM */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-200 to-teal-50 rounded-3xl blur-xl opacity-40"></div>

            <Image
              src="/Logo-dourada.png"
              alt="Reviva Saúde"
              width={500}
              height={350}
              className="rounded-2xl shadow-xl w-full max-w-[320px] sm:max-w-md object-contain"
              priority
            />
          </div>

          {/* TEXTO */}
          <div>

            <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white shadow-sm border border-teal-100 text-teal-600 text-sm font-semibold">
              Clínica Multidisciplinar • Gama – DF
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-800 leading-tight mb-5">
              Saúde física, mental <br className="hidden md:block" />
              e bem-estar em um só lugar
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-7 max-w-xl">
              Atendimento humanizado com profissionais especializados,
              estrutura moderna e cobertura por mais de 50 convênios.
              Cuidamos da sua saúde de forma completa e personalizada.
            </p>

            <div className="flex flex-wrap items-center gap-5">

              <a
                href="https://wa.me/5561998701506"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-full font-semibold transition shadow-md hover:shadow-lg"
              >
                Agendar consulta
              </a>

              <div className="text-sm text-gray-600">
                WhatsApp <br />
                <span className="font-semibold text-teal-700">
                  (61) 99870-1506
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
