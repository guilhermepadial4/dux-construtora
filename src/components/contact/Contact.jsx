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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome.';
      formIsValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu e-mail.';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
      formIsValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, insira seu telefone.';
      formIsValid = false;
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = 'Por favor, insira um telefone válido com 10 ou 11 dígitos.';
      formIsValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, insira sua mensagem.';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        await fetch('https://script.google.com/macros/s/AKfycbyHqKufVw9WbTmpo_2GOU7vff7rv94k8xFAagiFcdugOgwjS4YyZc60h6LmRhJMhx9Q4g/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        setFormData({ name: '', email: '', phone: '', message: '' });

        setSuccessMessage('Sua mensagem foi enviada com sucesso!');
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <section className="contact-us" id="contact">
        <div className="contact-info">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você!</p>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <a
              href="https://www.google.com/maps/place/R.+Vieira+de+Morais,+2110+-+Campo+Belo,+S%C3%A3o+Paulo+-+SP,+04617-007/@-23.6278539,-46.6659538,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5a7ba7fe5405:0xcfd89b7bd4c30849!8m2!3d-23.6278588!4d-46.6633789!16s%2Fg%2F11b8z78319?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Rua Vieira de Morais, 2110 - Campo Belo, SP</p>
            </a>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511960210555&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Telefone: (11) 96021-0555</p>
            </a>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:contato@duxconstrutora.com.br">
              <p>E-mail: contato@duxconstrutora.com.br</p>
            </a>
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
            {errors.name && <p className="error-message">{errors.name}</p>}
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
            <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
            <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} />
            {errors.message && <p className="error-message">{errors.message}</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
}
