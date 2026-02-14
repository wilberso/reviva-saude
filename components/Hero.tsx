import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-white">

      {/* LINHA DOURADA PREMIUM */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300" />

      {/* DECORAÇÃO SOFT */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-16 md:pb-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

         {/* BLOCO LOGO GLASS LUXURY COM BRILHO */}
<div className="relative flex justify-center animate-fadeUp">

  <div className="relative backdrop-blur-xl bg-white/40 border border-white/50 shadow-2xl rounded-[40px] p-14 overflow-hidden">

    {/* EFEITO DE BRILHO */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="shine-effect" />
    </div>
  
    <Image
      src="/logo4.png"
      alt="Reviva Saúde"
      width={340}
      height={340}
      className="mx-auto object-contain relative z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
      priority
    />

  </div>
</div>

          {/* TEXTO */}
          <div className="animate-fadeUp delay-150">

            {/* MICRO SLOGAN */}
            <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white shadow-md border border-teal-100 text-teal-600 text-xs tracking-widest font-semibold uppercase">
              Excelência em cuidado integral
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Saúde física, mental <br className="hidden md:block" />
              e bem-estar em um só lugar
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Atendimento humanizado com profissionais especializados,
              estrutura moderna e cobertura por mais de 50 convênios.
              Uma clínica preparada para cuidar de você com segurança,
              ética e responsabilidade.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap items-center gap-6">

              <a
                href="https://wa.me/5561998701506"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
              >
                Agendar consulta
              </a>

              {/* SELO DE AUTORIDADE */}
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-gray-100">
                <span className="text-yellow-500 text-xl">★</span>
                <div className="text-sm">
                  <span className="font-bold text-gray-900">+50 convênios</span>
                  <br />
                  <span className="text-gray-500">Atendimento ampliado</span>
                </div>
              </div>

            </div>

            {/* CONFIANÇA */}
            <p className="mt-6 text-sm text-gray-500">
              📍 Gama – DF • Estrutura moderna • Equipe multidisciplinar
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
