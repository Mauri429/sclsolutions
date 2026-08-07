function ContactCard({ icon: Icon, title, value, href }) {
  const content = (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-500">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
        <Icon />
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default ContactCard;