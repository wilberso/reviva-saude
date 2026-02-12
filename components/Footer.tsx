import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-0">
      {/* COPYRIGHT */}
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Reviva Saúde. Todos os direitos reservados.
      </div>
    </footer>
  );
}
