import { useState, useEffect } from 'react';

import Logo from '../../assets/logo.png';

import './header.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentHash = window.location.hash || '#home';
      setActiveSection(currentHash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll); 

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo empresa Dux Construtora" />
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`} aria-label="Menu principal">
          <a href="#home" className={activeSection === '#home' ? 'active' : ''}>
            Início
          </a>
          <a href="#about" className={activeSection === '#about' ? 'active' : ''}>
            Sobre
          </a>
          <a href="#services" className={activeSection === '#services' ? 'active' : ''}>
            Serviços
          </a>
          <a href="#contact" className={activeSection === '#contact' ? 'active' : ''}>
            Contato
          </a>
        </nav>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Abrir/Fechar Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
