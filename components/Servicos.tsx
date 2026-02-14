export default function EspecialidadesSection() {
  return (
    <section id="especialidades" className="bg-white pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* TÍTULO */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            Especialidades e Procedimentos
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* CARDS PREMIUM */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-gradient-to-br from-white to-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl mb-6 text-teal-600 text-xl">
              🩺
            </div>

            <h3 className="text-lg font-semibold text-teal-800 mb-4">
              Especialidades Médicas
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <li>Endocrinologista (adulto e infantil)</li>
              <li>Psiquiatria (adulto e infantil)</li>
              <li>Dermatologia</li>
              <li>Ortopedia</li>
              <li>Clínico Geral</li>
              <li>Ginecologia</li>
              <li>Psicologia</li>
              <li>Nutrição</li>
              <li>Fonoaudiologia</li>
              <li>Fisioterapia</li>
              <li>Quiropraxia</li>
            </ul>

          </div>

          {/* CARD 2 */}
          <div className="group bg-gradient-to-br from-white to-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl mb-6 text-teal-600 text-xl">
              ➕
            </div>

            <h3 className="text-lg font-semibold text-teal-800 mb-4">
              Procedimentos
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <li>Ecografias</li>
              <li>Ecodoppler</li>
              <li>Mapa e Holter</li>
              <li>Infiltração ortopédica</li>
              <li>Remoção de sinais e lesões</li>
              <li>Tratamento com Tizerpatida</li>
              <li>Tratamento hormonal</li>
              <li>Implante de DIU</li>
              <li>Implante de Implanon</li>
              <li>Ventosoterapia</li>
              <li>Acupuntura</li>
              <li>Auriculoterapia</li>
            </ul>

          </div>

          {/* CARD 3 */}
          <div className="group bg-gradient-to-br from-white to-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">

            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl mb-6 text-teal-600 text-xl">
                ✨
              </div>

              <h3 className="text-lg font-semibold text-teal-800 mb-4">
                Estética Facial e Corporal
              </h3>

              <p className="text-sm text-gray-600 mb-6">
                Tratamentos estéticos com foco em naturalidade,
                segurança e resultados equilibrados.
              </p>
            </div>

            <a
              href="https://wa.me/5561998701506"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-6 py-3 rounded-full font-semibold transition shadow-md hover:shadow-lg text-center"
            >
              Agendar avaliação
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
