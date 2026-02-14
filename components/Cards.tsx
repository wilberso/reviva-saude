import Image from "next/image";

export default function Cards() {
  const cards = [
    {
      title: "Especialidades",
      img: "/novosconvenios.jpg",
      desc: "Consultas adultas e infantis com diversas especialidades médicas."
    },
    {
      title: "Procedimentos",
      img: "/endocrino.jpg",
      desc: "Ecografias, infiltrações e tratamentos avançados."
    },
    {
      title: "Tratamentos",
      img: "/carbox.jpg",
      desc: "Emagrecimento e estética com acompanhamento especializado."
    },
    {
      title: "Dermatologia",
      img: "/dermatologista.jpg",
      desc: "Cuidados completos para saúde e estética da sua pele."
    } 
  ];

  return (
    <section
      id="destaque"
      className="relative bg-gradient-to-b from-teal-50 to-white pt-10 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* TÍTULO */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Nossos Destaques
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* IMAGEM GRANDE */}
              <div className="relative w-full h-72">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* TEXTO SOBRE A IMAGEM */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200">
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
