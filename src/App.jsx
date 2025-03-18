import { Faq } from './components/faq/Faq';
import { Header } from './components/header/Header';
import { HeroBanner } from './components/herobanner/HeroBanner';

import './styles/_globals.scss';

export function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Faq />
    </>
  );
}
