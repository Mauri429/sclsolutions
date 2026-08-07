import process from "../../data/process";
import SectionTitle from "../ui/sectionTitle";
import ProcessCard from "../ui/processCard";

function Process() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Nuestro proceso"
          title="¿Cómo trabajamos?"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <ProcessCard key={step.id} {...step} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;