import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-28 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[5px] text-green-500 font-semibold">
            Bienvenido
          </span>

          <h1 className="text-white text-6xl font-black mt-5 leading-tight">
            Soluciones confiables
            <span className="text-green-500"> para tu hogar.</span>
          </h1>

          <p className="text-slate-300 mt-8 text-lg leading-8">
            Desde mantenimiento y pintura hasta instalación de cámaras de
            seguridad y soporte técnico. Todo en un solo lugar.
          </p>

          <div className="space-y-4 mt-10">
            <div className="flex gap-3 items-center">
              <FaCheckCircle className="text-green-500" />
              Calidad garantizada
            </div>

            <div className="flex gap-3 items-center">
              <FaCheckCircle className="text-green-500" />
              Atención personalizada
            </div>

            <div className="flex gap-3 items-center">
              <FaCheckCircle className="text-green-500" />
              Presupuesto sin compromiso
            </div>
          </div>

          <button className="mt-12 flex items-center gap-3 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-white font-semibold text-lg">
            <FaWhatsapp size={24} />
            Solicitar presupuesto
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hero/hero.png`}
            alt="SCL Solutions"
            className="rounded-3xl shadow-2xl border border-slate-800"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;