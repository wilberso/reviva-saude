import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5561998701506"
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-[#25D366]
        shadow-lg
        hover:scale-105 hover:shadow-xl
        transition
      "
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={26}
        height={26}
        priority
      />
    </a>
  );
}
