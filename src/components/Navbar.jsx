// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Início',     href: '#hero'      },
  { label: 'Sobre',      href: '#sobre'     },
  { label: 'Currículo',  href: '#curriculo' },
  { label: 'Projetos',   href: '#projetos'  },
  { label: 'Serviços',   href: '#servicos'  },
  { label: 'Contato',    href: '#contato'   },
];

const Navbar = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeSection, setActive]  = useState('#hero');
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer para detectar seção ativa
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handler = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${
        scrolled ? 'glass-dark shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav ref={menuRef} className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-mono text-lg font-bold text-white group"
          aria-label="Voltar ao início"
        >
          <span className="text-brand-400 group-hover:text-brand-300 transition-colors">&lt;</span>
          <span className="group-hover:text-slate-200 transition-colors">LER</span>
          <span className="text-brand-400 group-hover:text-brand-300 transition-colors"> /&gt;</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://le-solutions.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-le text-xs px-4 py-2"
        >
          <img src="/logo.png" alt="L.E. Solutions" className="w-5 h-5 rounded-full object-cover" />
          L.E. Solutions
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden glass-dark ${
          isOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2 border-t border-white/5 mt-1">
            <a
              href="https://le-solutions.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-le w-full justify-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              <img src="/logo.png" alt="L.E. Solutions" className="w-5 h-5 rounded-full object-cover" />
              L.E. Solutions
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
