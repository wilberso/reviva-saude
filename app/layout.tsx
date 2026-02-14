import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";


export const metadata = {
  title: "REVIVA Saúde",
  description: "Clínica de Saúde – Gama DF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="pt-24 md:pt-28">
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
         <WhatsAppFloat />
      </body>
    </html>
  );
}
