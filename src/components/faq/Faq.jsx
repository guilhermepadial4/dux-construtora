import React, { useState } from 'react';
import './faq.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqData = [
  {
    question: 'Quais serviços a Dux Construtora oferece?',
    answer:
      'A Dux Construtora oferece serviços de construção civil, reformas, consultoria em engenharia e projetos arquitetônicos personalizados.',
  },
  {
    question: 'A construtora trabalha com projetos residenciais e comerciais?',
    answer: 'Sim! Atuamos tanto no segmento residencial quanto no comercial, garantindo qualidade e segurança em todas as obras.',
  },
  {
    question: 'Os projetos incluem acompanhamento de engenheiros?',
    answer:
      'Sim, todos os projetos contam com acompanhamento de engenheiros qualificados para garantir conformidade com normas e qualidade no resultado final.',
  },
  {
    question: 'A construtora possui certificações de qualidade?',
    answer: 'Sim, seguimos todas as regulamentações e possuímos certificações exigidas pelo setor para garantir segurança e qualidade.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id='services'>
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
