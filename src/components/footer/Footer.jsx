import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Logo from '../../assets/logo.png';

import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo Dux Construtora" />
        </div>
        <div className="footer-section contact">
          <h3>Contato</h3>
          <p>
            <FaMapMarkerAlt /> Rua Vieira de Morais, 2110 - Campo Belo, SP
          </p>
          <p>
            <FaPhoneAlt /> (11) 96021-0555
          </p>
          <p>
            <FaEnvelope /> contato@duxconstrutora.com.br
          </p>
        </div>
        <div className="footer-section links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="/sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/projetos">Projetos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dux Construtora. Todos os direitos reservados. by RastIT</p>
      </div>
    </footer>
  );
}
