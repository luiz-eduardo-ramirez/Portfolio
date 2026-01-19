// src/components/Contact.jsx
import { useState } from 'react';
import profilePic from '../../public/img/FotoPerfil.jpg';
import servicesImg from '../../public/img/Servicos.png'; // Importe a imagem de serviços

const Contact = () => {
  // Estado para controlar o modal
  const [modalData, setModalData] = useState({
    isOpen: false,
    content: null, // Pode ser texto ou caminho da imagem
    isImage: false
  });

  const handleWhatsapp = () => {
    window.open("https://wa.me/+5511999987915", "_blank");
  };

  const handleEmail = () => {
    // Abre o modal com texto
    setModalData({
      isOpen: true,
      content: "E-mail: luizeduramirez@icloud.com",
      isImage: false
    });
  };

  const handleServices = () => {
    // Abre o modal com imagem
    setModalData({
      isOpen: true,
      content: servicesImg,
      isImage: true
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <main className="apresentacao">
      <section className="descricao">
        <h1 className="titulo-redes">Entre em contato!</h1>
        
        <div className="redes-sociais">
          <button id="btn-telefone" className="contato-btn" onClick={handleWhatsapp}>
            📞 Whatsapp
          </button>

          <button id="btn-email" className="contato-btn" onClick={handleEmail}>
            📧 E-mail
          </button>

          <button id="btn-servicos" className="contato-btn" onClick={handleServices}>
            💻 Serviços
          </button>
        </div>
      </section>
      
      <img className="foto-perfil" src={profilePic} alt="Foto de Perfil" />

      {/* RENDERIZAÇÃO CONDICIONAL DO MODAL */}
      {modalData.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            
            {modalData.isImage ? (
              <img src={modalData.content} alt="Serviços" style={{ maxWidth: '100%' }} />
            ) : (
              <p>{modalData.content}</p>
            )}
            
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;