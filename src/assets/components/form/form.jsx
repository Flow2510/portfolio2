import { useState } from 'react';
import './form.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Form() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const [sendError, setSendError] = useState(false);
  
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
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f2e4a252-14c3-43db-a7f6-432bffb121be",
          name: name,
          email: email,
          message: message,
        }),
      })
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          console.log("Message envoyé !");
        } else {
          console.error("Erreur :", data);
          setSendError(prev => !prev)
        }
        })
        .catch((error) => {
          console.error("Erreur réseau :", error);
        });
        setMessageSend(prev => !prev);
        e.target.reset();
      }
    }

  return (
    <>
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
      {messageSend &&
        <div className='sendmodal'>
          <div className='sendmodal__wrapper'>
            <img className='sendmodal__image' src={sendError ? '/images/none.svg' : '/images/check.svg'} alt={sendError? "Checkbox none" : "Checkbox OK"} />
            <span className='sendmodal__title'>Message envoyé !</span>
            <p className='sendmodal__text'>{sendError? "Oups ! Votre message n’a pas pu être envoyé. Veuillez réessayer dans un instant." : "Merci ! Votre message a bien été reçu. Je reviendrai vers vous très vite."}</p>
            <button type='button' className='sendmodal__button' onClick={() => setMessageSend(prev => !prev)}>OK</button>
          </div>
        </div>
      }
    </>
  );
}