import Banner from '../../assets/build.jpg';

import './herobanner.scss';

export function HeroBanner() {
  return (
    <section className="hero-banner" id="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="overlay">
        <div className="content">
          <h1>Construindo o Futuro com Qualidade e Confiança</h1>
          <p>Na Dux Construtora, cada projeto é uma obra-prima que reflete excelência e dedicação.</p>
          <a href="https://duxconstrutora.com.br/projetos/" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn">Conheça Nossos Projetos</button>
          </a>
        </div>
      </div>
    </section>
  );
}
