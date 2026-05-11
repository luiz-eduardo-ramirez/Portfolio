import profilePic from '/img/FotoPerfil.jpg';
import AnimateOnScroll from './AnimateOnScroll';

const TECH_TAGS = ['Java', 'Spring Boot', 'React', 'Oracle Cloud', 'Linux', 'Docker'];

const HeroSection = () => {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '700ms' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <AnimateOnScroll animation="animate-slide-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            Disponível para novos projetos
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-up" delay={100} as="h1" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Olá, sou{' '}
            <span className="gradient-text block md:inline">Luiz Eduardo</span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-up" delay={200} as="p" className="text-xl text-brand-300 font-semibold mb-4">
            Desenvolvedor Full Stack & Consultor de TI
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-up" delay={300} as="p" className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            Focado em Java, Spring Boot e React. Com background sólido como Analista de TI,
            trago visão sistêmica ao desenvolvimento — unindo técnica e comunicação clara
            para construir soluções robustas.
          </AnimateOnScroll>

          {/* Tech tags */}
          <AnimateOnScroll animation="animate-fade-in" delay={400} className="flex flex-wrap gap-2 mb-10">
            {TECH_TAGS.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </AnimateOnScroll>

          {/* CTAs */}
          <AnimateOnScroll animation="animate-fade-in" delay={500} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#projetos')} className="btn-primary">
              Ver Projetos →
            </button>
            <button onClick={() => scrollTo('#contato')} className="btn-outline">
              Entre em Contato
            </button>
          </AnimateOnScroll>

          {/* Social */}
          <AnimateOnScroll animation="animate-fade-in" delay={600} className="flex items-center gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/luiz-ramirez"
              target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass border border-white/10 text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/luiz-eduardo-ramirez"
              target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <span className="text-slate-600 text-sm">luizeduramirez@icloud.com</span>
          </AnimateOnScroll>
        </div>

        {/* Foto */}
        <AnimateOnScroll animation="animate-slide-in-left" delay={200} className="relative flex items-center justify-center">
          {/* Decoração giratória */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-brand-500/20 animate-spin-slow" />
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-brand-500/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-brand-500/40 shadow-brand animate-glow animate-float">
            <img
              src={profilePic}
              alt="Luiz Eduardo Ramirez"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
          </div>

          {/* Badge flutuante */}
          <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-12 glass rounded-2xl px-4 py-3 border border-brand-500/20 shadow-glass">
            <p className="text-xs text-slate-400">Formado em</p>
            <p className="text-sm font-bold text-white">PUC-SP — Ciência da Computação</p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-brand-400 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-medium">Explorar</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
