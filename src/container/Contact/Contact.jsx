import React, { useState } from 'react';

import { images } from '../../constants';
// import { client } from '../../client';
import './Contact.scss';

const Contact = ({ mail, phone }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id='Contacto' className='app__contact app__whitebg app__wrapper app__flex'>
      <h2 className="head-text">Contacto</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href={mail} className="p-text">{mail}</a>
        </div>
        <div className="app__contact-card">
          <img src={images.whatsapp} alt="phone" />
          <a href={phone} className="p-text">{phone}</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nombre" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Correo" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Tú Mensaje"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Enviar Mensaje' : 'Enviando...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Gracias por ponerte en Contacto
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact;