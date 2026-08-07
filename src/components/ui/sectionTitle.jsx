function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-green-500 font-semibold">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black mt-3">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;
