import React, { useEffect, useState } from "react";
import Socials from "../components/Socials";
import { useForm, ValidationError } from '@formspree/react';

import send from "../../img/send.svg";
import location from "../../img/location.svg";
import wave from "../../img/wave.svg";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvoeajva"); 
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (state.succeeded || state.errors) {
      setPopupVisible(true);
      const timeoutId = setTimeout(() => {
        setPopupVisible(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [state.succeeded, state.errors]);

  return (
    <div className="component contact" data-testid='contact-component'>
      <div className="title-container">
        <h1 id="contact" className="title">Contact</h1>
        <div className="title-separator"></div>
      </div>
      <p>Envie de discuter d'un projet où vous avez simplement une question ? Voici comment me contacter !</p>
      <div className="contact-container">
        {popupVisible && state.succeeded && <p className="popup">Votre message à bien été envoyé ! &ensp;&#10003;</p>}
        {popupVisible && state.errors && <p className="popup error">Erreur lors de l'envoi du message. &ensp;&#10008;</p>}
        <form onSubmit={handleSubmit}>
          <div className="contact-fields">
            <input name="name" type="text" placeholder="Nom"/>
            <ValidationError prefix="name"  field="name" errors={state.errors} />
            <input name="email" type="email" placeholder="Email"/>
            <ValidationError prefix="email"  field="email" errors={state.errors} />
            <textarea name="message" id="message" placeholder="Votre message"></textarea>
            <ValidationError prefix="message"  field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className="classic-button white">Envoyer <img src={send} alt="envoyer message" /></button>
          </div>
        </form>
        <div className="contact-socials">
          <h3>Mes réseaux</h3>
          <Socials />
          <div className="localisation"><img src={location} alt="ma localisation" width={35} />Toulouse, France</div>
        </div>
      </div>
      <img id="wave" src={wave} alt="decorative img" />
    </div>
  );
}
 
export default Contact;