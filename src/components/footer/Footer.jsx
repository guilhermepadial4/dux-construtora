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
            <FaMapMarkerAlt />{' '}
            <a
              href="https://www.google.com/maps/place/R.+Vieira+de+Morais,+2110+-+Campo+Belo,+S%C3%A3o+Paulo+-+SP,+04617-007/@-23.6278539,-46.6659538,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5a7ba7fe5405:0xcfd89b7bd4c30849!8m2!3d-23.6278588!4d-46.6633789!16s%2Fg%2F11b8z78319?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rua Vieira de Morais, 2110 - Campo Belo, SP
            </a>
          </p>
          <p>
            <FaPhoneAlt />{' '}
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511960210555&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 96021-0555
            </a>
          </p>
          <p>
            <FaEnvelope /> <a href="mailto:contato@duxconstrutora.com.br">contato@duxconstrutora.com.br</a>
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
        <p>&copy; {new Date().getFullYear()} Dux Construtora. Todos os direitos reservados. by RastaIT</p>
      </div>
    </footer>
  );
}
