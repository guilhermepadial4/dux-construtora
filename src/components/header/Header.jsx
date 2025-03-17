import { useState } from 'react';

import Logo from '../../assets/logo.png';

import './header.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo empresa Dux Construtora" />
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`} aria-label="Menu principal">
          <a href="#home" className="active">
            Início
          </a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
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
