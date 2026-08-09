function SectionTitle({ title, subtitle, description }) {
  return (
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[6px] text-green-500">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;