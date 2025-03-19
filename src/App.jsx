import { Contact } from './components/contact/Contact';
import { Faq } from './components/faq/Faq';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { HeroBanner } from './components/herobanner/HeroBanner';
import { WhyChooseUs } from './components/whyschooseus/WhyChooseUs';

import './styles/_globals.scss';

export function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <WhyChooseUs />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
