import { useState } from 'react';
import './form.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Form() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    } else {
        setNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
        setEmailError(false);
    }
    if (message === "") {
      setMessageError(true);
    } else{
      setMessageError(false);
    }
    if (name !== "" && email !== "" && message !== "") {
      const subject = encodeURIComponent(`Message de ${name}`);
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:sendra.florian@gmail.com?subject=${subject}&body=${body}`;
      globalThis.location.href = mailtoLink;
    }
  }
  return (
    <motion.form 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="form" onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <label htmlFor="name" className="sr-only">
          Nom
        </label>
        <input
          id="name"
          className={`form__input${nameError ? " form__input--error" : ""}`}
          type="text"
          placeholder="Nom"
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && 
          <p className='form__error form__error-name'>Veuillez insérer un nom</p>
        }
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className={`form__input${emailError ? " form__input--error" : ""}`}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && 
          <p className='form__error form__error-name'>Veuillez insérer un email</p>
        }
      </div>
      <div className="form__textarea-wrapper">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className={`form__textarea${messageError ? " form__textarea--error" : ""}`}
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {messageError && 
          <p className='form__error form__error-name'>Veuillez insérer un message</p>
        }
      </div>
      <button className="form__button" type="submit">Envoyer message</button>
    </motion.form>
  );
}