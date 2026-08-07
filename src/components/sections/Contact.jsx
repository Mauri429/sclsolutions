import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import company from "../../config/company";

import Button from "../ui/Button";
import ContactCard from "../ui/ContactCard";
import SectionTitle from "../ui/SectionTitle";

function Contact() {

  const message = encodeURIComponent(
    "Hola, vi la página de SCL Solutions y me gustaría solicitar un presupuesto."
  );

  return (

    <section
      id="contacto"
      className="bg-slate-950 py-28"
    >

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Contacto"
          title="¿Necesitás un presupuesto?"
        />

        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-400">

          Estamos listos para ayudarte.
          Escribinos y responderemos lo antes posible.

        </p>

        <div className="grid gap-8 md:grid-cols-3">

          <ContactCard

            icon={FaWhatsapp}

            title="WhatsApp"

            value={company.whatsapp}

            href={`https://wa.me/${company.whatsapp}?text=${message}`}

          />

          <ContactCard

            icon={FaEnvelope}

            title="Correo"

            value={company.email}

            href={`mailto:${company.email}`}

          />

          <ContactCard

            icon={FaMapMarkerAlt}

            title="Ubicación"

            value={company.address}

          />

        </div>

        <div className="mt-16 flex justify-center">

          <Button/>

        </div>

      </div>

    </section>

  );

}

export default Contact;