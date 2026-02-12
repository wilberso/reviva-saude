export default function Convenios() {
  return (
   <section id="convenios" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Convênios
      </h2>

      <p className="text-center max-w-2xl mx-auto mb-8">
        Atendemos mais de <strong>50 convênios</strong>.  
        Entre em contato para confirmar a cobertura do seu plano.
      </p>

      <div className="text-center">
        <a
          href="https://wa.me/55XXXXXXXXXX"
          target="_blank"
          className="text-accent font-semibold hover:underline"
        >
          Consultar convênio pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
