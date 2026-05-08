// src/components/ProjectsSection.jsx
import { useState, useRef, useCallback } from 'react';

// ─── Dados dos projetos ───────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'scoops-amanda',
    title: 'E-commerce Scoops da Amanda',
    description:
      'E-commerce robusto e sistema de gerenciamento de vendas e estoque com integração com Mercado Pago para pagamentos online.',
    url: 'https://portal.scoopsamanda.com.br/',
    tags: ['Java Spring Boot', 'React', 'Docker', 'RabbitMQ', 'SQL Server', 'Mercado Pago SDK', 'OCI'],
    status: 'Produção',
    media: [
      '/projetos/scoops-1.mp4',
      '/projetos/scoops-2.png',
      '/projetos/scoops-3.png',
      '/projetos/scoops-4.png',
      '/projetos/scoops-5.png',
      '/projetos/scoops-6.png',
    ],
  },
  {
    id: 'portal-aluno',
    title: 'Portal do Aluno — Mara Passos',
    description:
      'Plataforma web para gestão de alunos, aulas, contratos, faltas, remarcações e acompanhamento financeiro do Estúdio Musical Mara Passos.',
    url: 'https://portal.estudiomusicalmarapassos.com.br',
    tags: ['React', 'Java Spring Boot', 'Docker', 'OCI', 'Mercado Pago SDK', 'CI/CD', 'PostgreSQL', 'RabbitMQ'],
    status: 'Produção',
    media: [
      '/projetos/portal-1.png',
      '/projetos/portal-2.png',
      '/projetos/portal-3.png',
      '/projetos/portal-4.png',
      '/projetos/portal-5.png',
    ],
  },
  {
    id: 'churninsight',
    title: 'ChurnInsight AI',
    description:
      'Ferramenta de Inteligência Artificial para análise preditiva de churn e retenção automatizada de clientes B2B.',
    url: 'https://luiz-eduardo-ramirez-chruninsight.vercel.app/',
    tags: ['Java Spring Boot', 'React', 'Python FastAPI', 'Scikit-Learn', 'Docker', 'OCI', 'PostgreSQL'],
    status: 'Demo',
    media: [
      '/projetos/churn-1.png',
      '/projetos/churn-2.png',
    ],
  },
];

// ─── Utilitário: detecta vídeo ────────────────────────────────────────────────
const isVideo = (src) => src.endsWith('.mp4') || src.endsWith('.webm');

// ─── Carrossel de mídia ───────────────────────────────────────────────────────
const MediaCarousel = ({ media, title }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const go = useCallback((dir) => {
    setCurrent((prev) => {
      const next = (prev + dir + media.length) % media.length;
      return next;
    });
  }, [media.length]);

  const goTo = (i) => setCurrent(i);

  const src = media[current];

  return (
    <div className="relative h-52 overflow-hidden bg-dark-900 group/carousel">
      {/* Mídia ativa */}
      {isVideo(src) ? (
        <video
          ref={videoRef}
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          key={src}
          src={src}
          alt={`${title} — slide ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent pointer-events-none" />

      {/* Setas — só aparecem se tiver mais de 1 mídia */}
      {media.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); go(-1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full
                       bg-dark-900/80 border border-white/10 text-white
                       flex items-center justify-center text-xs
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200
                       hover:bg-brand-600 hover:border-brand-500"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.preventDefault(); go(1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full
                       bg-dark-900/80 border border-white/10 text-white
                       flex items-center justify-center text-xs
                       opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200
                       hover:bg-brand-600 hover:border-brand-500"
            aria-label="Próximo"
          >
            ›
          </button>
        </>
      )}

      {/* Dots de navegação */}
      {media.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); goTo(i); }}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-200 rounded-full ${
                i === current
                  ? 'w-4 h-1.5 bg-brand-400'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Badge vídeo */}
      {isVideo(src) && (
        <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full
                         bg-dark-900/80 border border-white/10 text-white text-[10px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Demo
        </span>
      )}
    </div>
  );
};

// ─── Card de projeto ──────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
  <article
    className="card group flex flex-col overflow-hidden p-0"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Carrossel de mídia */}
    <div className="relative">
      <MediaCarousel media={project.media} title={project.title} />
      {/* Badge status */}
      <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold z-10 ${
        project.status === 'Produção'
          ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
          : 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
      }`}>
        {project.status}
      </span>
    </div>

    {/* Conteúdo */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="font-bold text-white text-base mb-2 group-hover:text-brand-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(t => (
          <span key={t} className="tag text-[10px]">{t}</span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-xs px-4 py-2 w-full justify-center"
      >
        Ver Projeto →
      </a>
    </div>
  </article>
);

// ─── Card de destaque L.E. Solutions ─────────────────────────────────────────
const LESolutionsCard = () => (
  <article className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-brand-500/30 shadow-brand-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-brand-950 to-dark-800" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

    <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
      {/* Logo / Ícone */}
      <div className="flex-shrink-0">
        <div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#00D4E8]/50"
          style={{ boxShadow: '0 0 32px rgba(0,212,232,0.5), 0 0 8px rgba(0,212,232,0.3) inset' }}
        >
          <img
            src="/logo.png"
            alt="L.E. Solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/15 border border-accent-500/25 text-accent-400 text-xs font-semibold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
          Empresa de Consultoria &amp; Desenvolvimento
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">L.E. Solutions</h3>

        <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-xl">
          Minha empresa de consultoria e desenvolvimento de software. Oferecemos soluções
          tecnológicas completas — de sites institucionais e sistemas web sob medida a
          servidores Linux e recuperação de dados — para impulsionar o seu negócio.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {['🌐 Sites Institucionais', '⚙️ Sistemas Web & APIs', '🐧 Servidores Linux', '🛠️ Manutenção de Hardware'].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://le-solutions.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-le px-8 py-3 text-base"
          >
            Visitar L.E. Solutions →
          </a>
          <a
            href={`https://wa.me/5511999987915?text=${encodeURIComponent('Olá! Vim pelo portfólio e tenho interesse nos serviços da L.E. Solutions.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-8 py-3 text-base"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </article>
);

// ─── Seção principal ──────────────────────────────────────────────────────────
const ProjectsSection = () => (
  <section id="projetos" className="py-24 bg-dark-800">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="dot-decoration" />
        <span className="text-brand-400 font-mono text-sm font-medium uppercase tracking-widest">
          Projetos
        </span>
      </div>
      <h2 className="section-title mb-3">
        Trabalhos em <span className="gradient-text">Destaque</span>
      </h2>
      <p className="section-subtitle mb-16">
        Projetos reais entregues para clientes e soluções desenvolvidas por mim.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <LESolutionsCard />
    </div>
  </section>
);

export default ProjectsSection;
