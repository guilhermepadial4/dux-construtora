import React, { useState } from 'react';
import './faq.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqData = [
  {
    question: 'Como funciona o investimento em imóveis de leilão?',
    answer: 'Selecionamos imóveis lucrativos, realizamos a aquisição e gestão completa, e distribuímos os lucros de forma transparente.',
  },
  {
    question: 'Qual a rentabilidade esperada?',
    answer: 'Os investidores podem obter um retorno de 1% a 2% ao mês, dependendo do imóvel e das condições do mercado.',
  },
  {
    question: 'Preciso me preocupar com burocracias legais?',
    answer: 'Não! A Dux Construtora cuida de toda a parte jurídica, desocupação e reformas, garantindo um processo tranquilo.',
  },
  {
    question: 'O investimento é seguro?',
    answer: 'Sim! A operação é regulamentada pelo Banco Central, garantindo total segurança e transparência.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="services">
      <h2>Perguntas Frequentes</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="icon">{openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </button>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}