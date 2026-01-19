// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Cria uma referência para o elemento do menu

  const toggleMenu = (e) => {
    e.stopPropagation(); // Impede que o clique no botão feche o menu imediatamente
    setIsMenuOpen(!isMenuOpen);
  };

  // Lógica para fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="menu-topo">
      <nav className="menu" aria-label="Navegação principal" ref={menuRef}>
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        <div id="menuDropdown" className={`dropdown-content ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Sobre mim</Link>
          <Link to="/cv" onClick={() => setIsMenuOpen(false)}>Currículo</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</Link>
        
        </div>
      </nav>
    </header>
  );
};

export default Header;