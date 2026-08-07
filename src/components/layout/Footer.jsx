import company from "../../config/company";

function Footer() {

  return (

    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center">

          <img
            src="/logo/Logo.png"
            alt={company.name}
            className="mb-5 h-16"
          />

          <h3 className="text-2xl font-bold text-white">

            {company.name}

          </h3>

          <p className="mt-3 text-slate-400">

            {company.slogan}

          </p>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} {company.name}. Todos los derechos reservados.

        </div>

      </div>

    </footer>

  );

}

export default Footer;