// src/components/CurriculumSection.jsx

const EXPERIENCES = [
  {
    role:    'Analista de TI',
    company: 'Unimais',
    period:  '2024 – 2025',
    desc:    'Gestão e suporte de infraestrutura, manutenção de sistemas e atendimento a chamados técnicos.',
    icon:    '🏢',
  },
  {
    role:    'Auxiliar de Suporte de TI',
    company: 'Fundação São Paulo',
    period:  '2022 – 2023',
    desc:    'Suporte técnico N1/N2, configuração de estações de trabalho e atendimento a usuários.',
    icon:    '🎓',
  },
  {
    role:    'Consultor de TI & Desenvolvedor Web',
    company: 'Freelancer / L.E. Solutions',
    period:  '2019 – Atual',
    desc:    'Desenvolvimento de projetos web, consultoria em infraestrutura e manutenção de sistemas para clientes variados.',
    icon:    '💻',
  },
];

const EDUCATION = [
  {
    title: 'Bacharel em Ciência da Computação',
    institution: 'PUC-SP',
    cert: '/docs/CCPUC.pdf',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    institution: 'Oracle',
    cert: '/docs/eCertificate.pdf',
  },
  {
    title: 'CS50 — Ciência da Computação',
    institution: 'Harvard University',
    cert: '/docs/CCH.pdf',
  },
  {
    title: 'FrontEnd Developer',
    institution: 'Ada Tech / Santander',
    cert: '/docs/AdaFront.pdf',
  },
  {
    title: 'Oracle ONE',
    institution: 'Alura Cursos',
    cert: '/docs/Luiz Eduardo Ramirez - Programa - One.pdf',
  },
  {
    title: 'Git & GitHub: Colaboração em Projetos',
    institution: 'Alura Cursos',
    cert: '/docs/git.pdf',
  },
];

const CurriculumSection = () => (
  <section id="curriculo" className="py-24 bg-dark-900">
    <div className="max-w-6xl mx-auto px-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-4 mb-4">
        <div className="dot-decoration" />
        <span className="text-brand-400 font-mono text-sm font-medium uppercase tracking-widest">
          Currículo
        </span>
      </div>
      <h2 className="section-title mb-3">
        Trajetória &{' '}
        <span className="gradient-text">Formação</span>
      </h2>
      <p className="section-subtitle mb-16">
        Experiências profissionais e educação acadêmica que moldaram minha carreira.
      </p>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experiências */}
        <div>
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            <span className="p-2 rounded-lg bg-brand-500/10 text-brand-400">💼</span>
            Experiências Profissionais
          </h3>
          <div className="relative pl-6 border-l border-dark-600 space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative">
                {/* Dot na linha do tempo */}
                <span className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-dark-900" />
                <div className="glass rounded-xl p-5 border border-white/5 hover:border-brand-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-bold text-white">{exp.role}</p>
                      <p className="text-brand-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="tag whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação */}
        <div>
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            <span className="p-2 rounded-lg bg-accent-500/10 text-accent-400">🎓</span>
            Formação & Certificações
          </h3>
          <div className="space-y-3">
            {EDUCATION.map((edu, i) => (
              <a
                key={i}
                href={edu.cert}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 glass rounded-xl p-4 border border-white/5 hover:border-brand-500/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {edu.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{edu.institution}</p>
                </div>
                <span className="text-slate-600 group-hover:text-brand-400 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CurriculumSection;
