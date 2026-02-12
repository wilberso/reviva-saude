export default function Servicos() {
  return (
    <section className="bg-gray-50 py-24" id="especialidades">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-16 text-center">
          Especialidades e Procedimentos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-6">🩺</div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              Especialidades Médicas
            </h3>

            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>Endocrinologista (adulto e infantil)</li>
              <li>Psiquiatria (adulto e infantil)</li>
              <li>Dermatologia</li>
              <li>Ortopedia</li>
              <li>Clínico Geral</li>
              <li>Ginecologia</li>
              <li>Psicologia (adulto e infantil)</li>
              <li>Nutrição (adulto e infantil)</li>
              <li>Fonoaudiologia (adulto, infantil e ABA)</li>
              <li>Fisioterapia ortopédica</li>
              <li>Fisioterapia pélvica</li>
              <li>Quiropraxia</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-6">🏥</div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              Procedimentos
            </h3>

            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>Ecografias</li>
              <li>Ecodoppler</li>
              <li>Mapa e Holter</li>
              <li>Infiltração ortopédica</li>
              <li>Remoção de sinais, verrugas e lesões</li>
              <li>Tratamento com Tirzepatida</li>
              <li>Tratamento hormonal (menopausa)</li>
              <li>Implante de DIU</li>
              <li>Implante de Implanon</li>
              <li>Ventosoterapia</li>
              <li>Acupuntura</li>
              <li>Auriculoterapia</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-6">✨</div>
            <h3 className="text-xl font-semibold text-teal-600 mb-6">
              Estética Facial e Corporal
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Tratamentos estéticos com foco em naturalidade,
              segurança e resultados equilibrados.
            </p>

            <a
              href="https://wa.me/5561998701506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
            >
              Agendar avaliação
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
