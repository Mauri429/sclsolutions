import { FaWhatsapp } from "react-icons/fa";
import company from "../../config/company";

function WhatsAppButton() {

  const message = encodeURIComponent(
    "Hola, vi la página de SCL Solutions y me gustaría solicitar un presupuesto."
  );

  return (

    <a
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-green-500
      text-white
      text-3xl
      shadow-xl
      transition-all
      duration-300
      hover:scale-110
      hover:bg-green-600
      "
    >

      <FaWhatsapp />

    </a>

  );

}

export default WhatsAppButton;