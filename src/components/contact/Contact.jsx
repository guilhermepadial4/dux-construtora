import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

import './contact.scss';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSuccessMessage('Sua mensagem foi enviada com sucesso!');
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  return (
    <>
      <section className="contact-us">
        <div className="contact-info">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você!</p>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>Telefone: (11) 1234-5678</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>E-mail: contato@duxconstrutora.com.br</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Envie sua Mensagem</h2>
          {successMessage && (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <span>{successMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
}
