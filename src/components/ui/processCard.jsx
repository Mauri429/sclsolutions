import { motion } from "framer-motion";

function ProcessCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white">
        <Icon />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400 leading-7">
        {description}
      </p>
    </motion.article>
  );
}

export default ProcessCard;