import { useState } from 'react';
import './form.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:sendra.florian@gmail.com?subject=${subject}&body=${body}`;
    globalThis.location.href = mailtoLink;
  }
  return (
    <motion.form 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="form" onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <label htmlFor="name" className="sr-only">
          Nom
        </label>
        <input
          id="name"
          className="form__input"
          type="text"
          placeholder="Nom"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__textarea-wrapper">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className="form__textarea"
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="form__button" type="submit">Envoyer message</button>
    </motion.form>
  );
}