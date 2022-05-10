import React from 'react'
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


import "./Contact.css"
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Insta from "../../img/instagram.png";

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_knj8c7q",
            "template_a92i55n",
            formRef.current,
            "toAQnLkg4RDzXfwM7"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Faça já a sua reserva</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    <a target="blank" href="https://bit.ly/39L2hNc">+55 92 982869533</a>
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Email} alt="" />
                    hotelcolorsmanaus@yahoo.com
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Address} alt="" />
                    <a target="blank" href="https://bit.ly/3P6WQIs">Rua 10 de Julho, 833, Centro, Manaus, Amazonas, Brasil.</a>
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Insta} alt="" />
                    <a target="blank" href="https://www.instagram.com/hotelcolorsmanaus">@hotelcolorsmanaus</a>
                </div>          
            </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>Entre em contato</b> Estamos disponíveis para te atender.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="user_name" />
            <input type="text" placeholder="Assunto" name="user_subject" />
            <input type="text" placeholder="Seu email" name="user_email" />
            <textarea rows="5" placeholder="Mensagem" name="message" />
            <button>Enviar</button>
          </form>
          {done && "Obrigado, responderemos em breve ..."}
        </div>
      </div>
    </div>
  )
}

export default Contact
