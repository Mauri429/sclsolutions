import { motion } from "framer-motion";

function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        min-h-[320px]
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-8
        transition-colors
        duration-200
        hover:border-slate-700
      "
    >
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