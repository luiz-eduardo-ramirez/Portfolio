// src/components/FooterSection.jsx
const YEAR = new Date().getFullYear();

const FooterSection = () => (
  <footer className="bg-dark-900 border-t border-white/5 py-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="font-mono text-lg font-bold text-white">
          <span className="text-brand-400">&lt;</span>
          LER
          <span className="text-brand-400"> /&gt;</span>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['#hero', '#sobre', '#curriculo', '#projetos', '#servicos', '#contato'].map((href) => (
            <button
              key={href}
              onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-500 hover:text-brand-400 text-sm transition-colors capitalize"
            >
              {href.slice(1).replace('hero', 'Início').replace('sobre', 'Sobre').replace('curriculo', 'Currículo').replace('projetos', 'Projetos').replace('servicos', 'Serviços').replace('contato', 'Contato')}
            </button>
          ))}
        </div>

        {/* L.E. Solutions link */}
        <a
          href="https://le-solutions.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors flex items-center gap-2 group"
          style={{ color: '#00D4E8' }}
        >
          <img
            src="/logo.png"
            alt="L.E. Solutions"
            className="w-5 h-5 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="opacity-70 group-hover:opacity-100 transition-opacity">L.E. Solutions</span>
        </a>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-slate-600 text-xs">
          © {YEAR} Luiz Eduardo Ramirez. Desenvolvido com{' '}
          <span className="text-brand-500">React</span> +{' '}
          <span className="text-accent-500">Tailwind CSS</span> +{' '}
          <span className="text-slate-500">Vite</span>
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
