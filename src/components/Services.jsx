import React from 'react';
import '../styles/Services.css'; // Vamos criar esse CSS no próximo passo

const Services = () => {
  const whatsappNumber = "5511999987915"; // Seu número (coloque o real aqui)

  const servicesList = [
    {
      id: 1,
      title: "Sites Institucionais",
      icon: "🌐",
      description: "Desenvolvimento de sites modernos e responsivos utilizando React. Inclui hospedagem, otimização de performance e SEO básico para sua empresa aparecer no Google.",
      message: "Olá Luiz! Tenho interesse na criação de um Site Institucional."
    },
    {
      id: 2,
      title: "Sistemas Web & APIs",
      icon: "⚙️",
      description: "Soluções complexas com Back-end (Java/Spring), Banco de Dados e interfaces web personalizadas. Ideal para gestão de negócios, dashboards e automações hospedadas na nuvem.",
      message: "Olá Luiz! Preciso de um orçamento para um Sistema Web/API."
    },
    {
      id: 3,
      title: "Servidores Linux",
      icon: "🐧",
      description: "Configuração completa, hardening (segurança), scripts de automação e gerenciamento de servidores VPS ou dedicados para garantir que sua aplicação não pare.",
      message: "Olá Luiz! Gostaria de contratar serviços de configuração Linux."
    },
    {
      id: 4,
      title: "Manutenção de Hardware",
      icon: "🛠️",
      description: "Diagnóstico, reparo, limpeza e restauração de computadores (Desktops/Notebooks) e servidores. Garanta a vida útil e a velocidade do seu equipamento.",
      message: "Olá Luiz! Preciso de manutenção para meus computadores."
    }
  ];

  return (
    <section className="servicos">
      <h1 className="nome-topo">Meus Serviços</h1>
      <p className="descricao-servicos">
        Soluções tecnológicas sob medida para o seu negócio ou necessidade pessoal.
      </p>

      <div className="servicos-grid">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="card-servico"
            style={{ animationDelay: `${index * 0.2}s` }} // Efeito cascata
          >
            <div className="icon-servico">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-contratar"
            >
              Orçar Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;