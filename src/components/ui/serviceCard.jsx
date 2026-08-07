import { motion } from "framer-motion";

function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg hover:border-green-500 min-h-[320px]"
    >
      {/* Línea superior */}
      <div className="absolute left-0 top-0 h-1 w-0 rounded-t-2xl bg-green-500 transition-all duration-300 group-hover:w-full" />

      {/* Icono */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl ${color}`}
      >
        <Icon />
      </div>

      {/* Título */}
      <h3 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Descripción */}
      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </motion.article>
  );
}

export default ServiceCard;