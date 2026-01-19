import codingImg from '../../public/img/Programando.jpg'; 


const Curriculum = () => {
  return (
    <main className="apresentacao">
      <section className="descricao">
        <h1 className="nome-topo">Currículo</h1>
        
        <h2 className="nome-topo">Experiências</h2>
        <ul className="lista-experiencias">
            <li>Analista de TI - Unimais (2024 - 2025) </li>
            <li>Fundação São Paulo (2022 - 2023) - Auxiliar de Suporte de TI</li>
            <li>Consultor de TI e desenvolvedor Web (2019 - Momento) - Realização de projetos web e manutenção de sistemas</li>
        </ul>

        <h2 className="nome-topo">Estudos</h2>
        <div className="lista-estudos">
          <ul>
            <li>Bacharel em Ciência da Computação - PUC-SP <a href="/docs/CCPUC.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
            <li>Curso: Ciência da Computação - Harvard <a href="/docs/CCH.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
            <li>Curso: FrontEnd - Ada/Santander <a href="/docs/AdaFront.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
            <li>Curso: Oracle One - Alura Cursos <a href="/docs/Luiz Eduardo Ramirez - Programa - One.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
            <li>Curso ChatGPT: otimizando a qualidade dos resultados - Alura Cursos <a href="/docs/resultados.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
            <li>Curso Git e GitHub: compartilhando e colaborando em projetos - Alura Cursos <a href="/docs/git.pdf" target="_blank" rel="noopener noreferrer">Acessar certificado</a></li>
          </ul>
        </div>
      </section>
      
      <div className="imagem-container">
        <img className="programando" src={codingImg} alt="Programando" />
      </div>

    </main>
  );
};

export default Curriculum;