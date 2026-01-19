// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';
import './styles/Global.css';      // Variáveis e Layout Base
import './styles/Header.css';      // Menu
import './styles/Components.css';  // Botões e Imagens
import './styles/Modal.css';       // Modais
import './styles/Footer.css';      // Rodapé

function App() {
  return (
    <Router>
      <div className="inicio"> {/* Container global */}
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;