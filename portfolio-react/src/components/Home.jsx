// src/components/Home.jsx
import linkedinIcon from '../../public/img/linkedin.svg';
import githubIcon from '../../public/img/github.svg';
import profilePic from '../../public/img/FotoPerfil.jpg';

const Home = () => {
  return (
    <main className="apresentacao">
      <section className="descricao">
        <h1 className="nome-topo">Luiz Eduardo Ramirez</h1>
        <p className="descricao-texto">
          Desenvolvedor Full Stack focado em Java, Spring Boot e React. Com um background sólido como Analista de TI e Consultor, trago uma visão sistêmica para o desenvolvimento de software, unindo capacidade técnica na resolução de problemas com uma comunicação clara. Busco desafios onde possa construir soluções robustas e evoluir junto com a equipe.
        </p>
        
        <h2 className="titulo-redes">Acesse minhas redes sociais:</h2>
        
        <div className="redes-sociais">
          <a className="links" href="https://www.linkedin.com/in/luiz-ramirez" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin" /> Linkedin
          </a>
          <a className="links" href="https://github.com/luiz-eduardo-ramirez" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" /> GitHub
          </a>
        </div>
      </section>
      
      <img className="foto-perfil" src={profilePic} alt="Foto de Luiz Eduardo Ramirez" />
    </main>
  );
};

export default Home;