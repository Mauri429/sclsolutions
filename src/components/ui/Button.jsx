import { FaWhatsapp } from "react-icons/fa";
import company from "../../config/company";

function Button() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      <FaWhatsapp size={22} />
      Solicitar presupuesto
    </a>
  );
}

export default Button;