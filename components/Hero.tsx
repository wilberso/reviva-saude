import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-white">
      
      {/* DECORAÇÃO DE FUNDO */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-20 md:pb-28">

        {/* BLOCO SUPERIOR */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">

          {/* IMAGEM PREMIUM */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-200 to-teal-50 rounded-3xl blur-xl opacity-40"></div>

            <Image
              src="/convenio.jpg"
              alt="Reviva Saúde"
              width={520}
              height={400}
              className="relative rounded-3xl shadow-xl object-cover w-full max-w-md md:max-w-lg"
              priority
            />
          </div>

          {/* TEXTO INSTITUCIONAL */}
          <div>

            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white shadow-sm border border-teal-100 text-teal-600 text-sm font-semibold">
              Clínica Multidisciplinar • Gama – DF
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-800 leading-tight mb-6">
              Saúde física, mental <br className="hidden md:block" />
              e bem-estar em um só lugar
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
              Atendimento humanizado com profissionais especializados,
              estrutura moderna e cobertura por mais de 50 convênios.
              Cuidamos da sua saúde de forma completa e personalizada.
            </p>

            <div className="flex flex-wrap items-center gap-6">

              <a
                href="https://wa.me/5561998701506"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-md hover:shadow-lg"
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

        {/* CARDS PREMIUM */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {[
            {
              title: "Especialidades",
              img: "/novosconvenios.jpg",
              desc: "Consultas adultas e infantis com diversas especialidades médicas."
            },
            {
              title: "Procedimentos",
              img: "/endocrino.jpg",
              desc: "Ecografias, infiltrações, tratamentos hormonais e muito mais."
            },
            {
              title: "Tratamentos",
              img: "/carbox.jpg",
              desc: "Emagrecimento, estética facial e corporal com acompanhamento."
            },
            {
              title: "Dermatologia",
              img: "/dermatologista.jpg",
              desc: "Cuidados completos para saúde e estética da sua pele."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-teal-700 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
