import Hero from "../components/Hero";
import Especialidades from "../components/Especialidades";
import Convenios from "../components/Convenios";
import Diferenciais from "../components/Diferenciais";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Emagrecimento from "../components/Emagrecimento";
import Servicos from "../components/Servicos";

export default function Home() {
  return (
    <main className="bg-background text-text">
      <Hero />
      <Servicos />
    
      <Emagrecimento />            
      <Diferenciais />
      <WhatsAppCTA />
    </main>
  );
}
