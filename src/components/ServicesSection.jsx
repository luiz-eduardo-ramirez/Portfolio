// src/components/ServicesSection.jsx
import AnimateOnScroll from './AnimateOnScroll';

const SERVICES = [
  {
    id: 1,
    icon: '🌐',
    title: 'Sites Institucionais',
    description:
      'Desenvolvimento de sites modernos e responsivos com React. Inclui hospedagem, performance otimizada e SEO para sua empresa aparecer no Google.',
    message: 'Olá Luiz! Tenho interesse na criação de um Site Institucional.',
    gradient: 'from-blue-600/20 to-brand-600/20',
    border:   'border-blue-500/20 hover:border-blue-500/40',
    badge:    'Mais popular',
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'Sistemas Web & APIs',
    description:
      'Soluções completas com Java/Spring Boot, banco de dados e interfaces web personalizadas. Ideal para gestão de negócios e dashboards na nuvem.',
    message: 'Olá Luiz! Preciso de um orçamento para um Sistema Web/API.',
    gradient: 'from-brand-600/20 to-purple-600/20',
    border:   'border-brand-500/20 hover:border-brand-500/40',
    badge:    null,
  },
  {
    id: 3,
    icon: '🐧',
    title: 'Servidores Linux',
    description:
      'Configuração, hardening, scripts de automação e gerenciamento de VPS/servidores dedicados para garantir que sua aplicação nunca pare.',
    message: 'Olá Luiz! Gostaria de contratar serviços de configuração Linux.',
    gradient: 'from-orange-600/20 to-red-600/20',
    border:   'border-orange-500/20 hover:border-orange-500/40',
    badge:    null,
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'Manutenção de Hardware',
    description:
      'Diagnóstico, reparo, limpeza e restauração de computadores e servidores. Garanta a vida útil e velocidade do seu equipamento.',
    message: 'Olá Luiz! Preciso de manutenção para meus computadores.',
    gradient: 'from-amber-600/20 to-yellow-600/20',
    border:   'border-amber-500/20 hover:border-amber-500/40',
    badge:    null,
  },
  {
    id: 5,
    icon: '📼',
    title: 'Recuperação de Dados',
    description:
      'Recuperação de HDDs e SSDs corrompidos. Conversão de mídias físicas antigas (VHS, DVDs, Disquetes) para formatos digitais modernos.',
    message: 'Olá Luiz! Tenho interesse em recuperação de dados ou conversão de mídias.',
    gradient: 'from-accent-600/20 to-teal-600/20',
    border:   'border-accent-500/20 hover:border-accent-500/40',
    badge:    null,
  },
];

const WHATSAPP = '5511999987915';

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-dark-900">
    <div className="max-w-6xl mx-auto px-6">
      {/* Cabeçalho */}
      <AnimateOnScroll animation="animate-slide-up" className="flex items-center gap-4 mb-4">
        <div className="dot-decoration" />
        <span className="text-brand-400 font-mono text-sm font-medium uppercase tracking-widest">
          Serviços
        </span>
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate-slide-up" delay={100} as="h2" className="section-title mb-3">
        O que posso{' '}
        <span className="gradient-text">fazer por você</span>
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate-slide-up" delay={200} as="p" className="section-subtitle mb-16">
        Soluções tecnológicas sob medida para o seu negócio ou necessidade pessoal.
        Orçamento sem compromisso via WhatsApp.
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <AnimateOnScroll
            key={service.id}
            animation="animate-slide-up"
            delay={index * 100}
            as="article"
            className={`relative group glass rounded-2xl p-6 border transition-all duration-300
              hover:-translate-y-2 hover:shadow-card-hover ${service.border}`}
          >
            {/* Gradiente de fundo */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Badge */}
            {service.badge && (
              <span className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold shadow-brand">
                {service.badge}
              </span>
            )}

            <div className="relative z-10">
              {/* Ícone */}
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                💬 Solicitar Orçamento
              </a>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Banner bottom */}
      <AnimateOnScroll animation="animate-fade-in" className="mt-12 glass rounded-2xl p-6 md:p-8 border border-brand-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Não encontrou o que precisa?</h3>
          <p className="text-slate-400 text-sm">
            Entre em contato e vamos encontrar a melhor solução para você.
          </p>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent whitespace-nowrap"
        >
          📞 Falar agora
        </a>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ServicesSection;
