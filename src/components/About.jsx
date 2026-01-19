import profilePic from '../../public/img/FotoPerfil.jpg';
import maraPassosImg from '../../public/img/marapassos.jpg';
import amigoSecretoImg from '../../public/img/amigo-secreto.png';

const About = () => {
  return (
    <main className="apresentacao">
      <section className="descricao">
        <h1 className="nome-topo">Sobre mim</h1>
        <p className="descricao-texto">
          Desenvolvedor Full Stack Júnior, graduado em Ciência da Computação pela PUC-SP (Dez/2024). Possuo experiência prática no desenvolvimento de APIs RESTful com Java (Spring Boot) e interfaces dinâmicas em React, sempre aplicando boas práticas de versionamento com Git. Meu diferencial é a visão integrada de infraestrutura, com vivência em deploy na Oracle Cloud (OCI) e servidores Linux. Sou um profissional engajado e busco uma oportunidade para colaborar ativamente em equipe, somar aos projetos da empresa e acelerar meu crescimento profissional.
        </p>
        
        <h2 className="titulo-redes">Acesse meus projetos:</h2>
        
        <div className="redes-sociais">
          <a className="projetos" href="https://estudiomusicalmarapassos.com.br/" target="_blank" rel="noopener noreferrer"> 
            <img src={maraPassosImg} alt="MaraPassos" /> Site institucional Estúdio Mara Passos
          </a>
          <a className="projetos" href="https://portal.estudiomusicalmarapassos.com.br/" target="_blank" rel="noopener noreferrer"> 
            <img src={maraPassosImg} alt="MaraPassos" /> Portal academico Estúdio Mara Passos
          </a>
          <a className="projetos" href="http://137.131.255.43:5173/frontend/" target="_blank" rel="noopener noreferrer">
            <img src={amigoSecretoImg} alt="ChurnIsight" /> ChurnIsight
          </a>
        </div>
      </section>
      
      <img className="foto-perfil" src={profilePic} alt="Foto de Perfil" />
    </main>
  );
};

export default About;