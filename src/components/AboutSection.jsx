// src/components/AboutSection.jsx
import profilePic from '/img/FotoPerfil.jpg';

const SKILLS = [
  { category: 'Backend',      items: ['Java 17+', 'Spring Boot', 'REST APIs', 'JPA / Hibernate'] },
  { category: 'Frontend',     items: ['React', 'Tailwind CSS', 'JavaScript ES2024', 'Vite'] },
  { category: 'Infraestrutura', items: ['Oracle Cloud (OCI)', 'Linux / Shell', 'Docker', 'Git / GitHub'] },
  { category: 'Database',     items: ['PostgreSQL', 'MySQL', 'Oracle DB', 'MongoDB'] },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-dark-800">
    <div className="max-w-6xl mx-auto px-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-4 mb-16">
        <div className="dot-decoration" />
        <span className="text-brand-400 font-mono text-sm font-medium uppercase tracking-widest">
          Sobre mim
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Texto */}
        <div>
          <h2 className="section-title mb-6">
            Desenvolvedor que pensa além do{' '}
            <span className="gradient-text">código</span>
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Sou Desenvolvedor Full Stack Júnior, graduado em{' '}
              <strong className="text-slate-200">Ciência da Computação pela PUC-SP</strong> (Dez/2024).
              Possuo experiência prática no desenvolvimento de APIs RESTful com{' '}
              <strong className="text-slate-200">Java (Spring Boot)</strong> e interfaces dinâmicas
              em <strong className="text-slate-200">React</strong>.
            </p>
            <p>
              Meu diferencial é a{' '}
              <strong className="text-slate-200">visão integrada de infraestrutura</strong>, com
              vivência em deploy na Oracle Cloud (OCI) e servidores Linux. Como ex-Analista de TI,
              trago a capacidade de compreender o negócio e traduzir requisitos em soluções técnicas robustas.
            </p>
            <p>
              Sou profissional engajado e busco oportunidades para colaborar ativamente em equipe,
              somar aos projetos e acelerar meu crescimento profissional.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/docs/CCPUC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-4 py-2"
            >
              📄 Diploma PUC-SP
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-ramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="card">
              <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
