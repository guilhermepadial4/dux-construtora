import React, { useState } from 'react';
import './calculator.scss';

export function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [totalInvestment, setTotalInvestment] = useState(null);

  const formatNumber = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const parseNumber = (value) => {
    return parseFloat(value.replace(/\./g, '').replace(',', '.')) || 0;
  };

  const handleChange = (e, setter) => {
    setter(e.target.value); 
  };

  const handleBlur = (value, setter) => {
    if (value === '') return;
    setter(formatNumber(parseNumber(value)));
  };

  const calculateInvestment = () => {
    const initial = parseNumber(initialInvestment);
    const monthly = parseNumber(monthlyInvestment);
    const rate = parseNumber(interestRate) / 100 / 12;
    const time = parseInt(years) || 0;

    let total = initial;
    for (let i = 0; i < time * 12; i++) {
      total = (total + monthly) * (1 + rate);
    }

    setTotalInvestment(total.toFixed(2));
  };

  return (
    <section className="calculator">
      <h2>Calculadora de Investimento</h2>
      <div className="input-group">
        <label>Investimento Inicial (R$):</label>
        <input
          type="text"
          value={initialInvestment}
          onChange={(e) => handleChange(e, setInitialInvestment)}
          onBlur={() => handleBlur(initialInvestment, setInitialInvestment)}
        />
      </div>
      <div className="input-group">
        <label>Investimento Mensal (R$):</label>
        <input
          type="text"
          value={monthlyInvestment}
          onChange={(e) => handleChange(e, setMonthlyInvestment)}
          onBlur={() => handleBlur(monthlyInvestment, setMonthlyInvestment)}
        />
      </div>
      <div className="input-group">
        <label>Taxa de Juros Anual (%):</label>
        <input
          type="text"
          value={interestRate}
          onChange={(e) => handleChange(e, setInterestRate)}
          onBlur={() => handleBlur(interestRate, setInterestRate)}
        />
      </div>
      <div className="input-group">
        <label>Anos:</label>
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      </div>
      <button onClick={calculateInvestment}>Calcular</button>
      {totalInvestment !== null && (
        <div className="result">
          <h3>Resultado:</h3>
          <p>Total do Investimento: R$ {formatNumber(totalInvestment)}</p>
        </div>
      )}
    </section>
  );
}
