import services from "../../data/services";
import SectionTitle from "../ui/sectionTitle";
import ServiceCard from "../ui/serviceCard";

function Services() {
  return (
    <section
      id="servicios"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Lo que hacemos"
          title="Nuestros Servicios"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;