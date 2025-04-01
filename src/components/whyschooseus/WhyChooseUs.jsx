import { FaShieldAlt, FaRegHandshake, FaBalanceScale, FaChartLine } from 'react-icons/fa';
import './whychooseus.scss';

export function WhyChooseUs() {
  return (
    <>
      <section className="why-choose-us" id="about">
        <div className="content-wrapper">
          <h2>Por que Escolher a Dux Construtora?</h2>
          <p className="subtitle">Invista em imóveis de leilão com segurança, rentabilidade e sem burocracia.</p>
          <div className="features">
            <div className="feature">
              <FaShieldAlt className="icon" />
              <h3>Segurança Garantida</h3>
              <p>Operação regulamentada pelo Banco Central, proporcionando total transparência e segurança no investimento.</p>
            </div>
            <div className="feature">
              <FaRegHandshake className="icon" />
              <h3>Gestão Completa</h3>
              <p>Cuidamos de toda a parte jurídica, desocupação e reformas para você investir sem preocupações.</p>
            </div>
            <div className="feature">
              <FaChartLine className="icon" />
              <h3>Alta Rentabilidade</h3>
              <p>Retorno estimado de 1% a 2% ao mês, oferecendo um investimento lucrativo e eficiente.</p>
            </div>
            <div className="feature">
              <FaBalanceScale className="icon" />
              <h3>Sem Burocracia</h3>
              <p>Facilidade no processo de investimento, com total suporte e transparência desde a aquisição até o lucro.</p>
            </div>
          </div>
          <a href="#contact">
            <button className="cta-button">Saiba Mais</button>
          </a>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
}
