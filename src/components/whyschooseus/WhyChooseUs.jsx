import { FaTools, FaShieldAlt, FaRegHandshake, FaStar } from 'react-icons/fa';

import './whychooseus.scss';

export function WhyChooseUs() {
  return (
    <>
      <section className="why-choose-us">
        <div className="content-wrapper">
          <h2>Por que Escolher a Dux Construtora?</h2>
          <p className="subtitle">Comprometimento com a excelência, inovação e satisfação total dos clientes.</p>
          <div className="features">
            <div className="feature">
              <FaShieldAlt className="icon" />
              <h3>Segurança e Qualidade</h3>
              <p>Utilizamos materiais de alta qualidade e seguimos rigorosos padrões de segurança.</p>
            </div>
            <div className="feature">
              <FaRegHandshake className="icon" />
              <h3>Atendimento Personalizado</h3>
              <p>Nosso time acompanha cada etapa do seu projeto, garantindo total transparência.</p>
            </div>
            <div className="feature">
              <FaTools className="icon" />
              <h3>Equipe Especializada</h3>
              <p>Profissionais altamente qualificados para entregar projetos impecáveis.</p>
            </div>
            <div className="feature">
              <FaStar className="icon" />
              <h3>Satisfação Garantida</h3>
              <p>Centenas de clientes satisfeitos com obras entregues no prazo e com qualidade excepcional.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3>O que nossos clientes dizem</h3>
            <div className="testimonial">
              <p>"A Dux Construtora superou nossas expectativas. O projeto foi entregue no prazo e com qualidade impecável."</p>
              <span>- Maria Silva, Cliente Residencial</span>
            </div>
            <div className="testimonial">
              <p>"Profissionais competentes e atenciosos. Recomendo a Dux Construtora para qualquer projeto."</p>
              <span>- João Pereira, Cliente Comercial</span>
            </div>
          </div>
          <button className="cta-button">Solicite um Orçamento</button>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
}
