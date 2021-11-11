import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
import { titleAnim } from "./animation";
import emailjs from "emailjs-com";
import contact from "../Img/contact.jpg";

const USER_ID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const [status, setStatus] = useState();

  function sendEmail(e) {
    e.preventDefault();

    console.log(USER_ID);
    emailjs
      .sendForm("service_rdfegnn", "template_fos7y68", e.target, `${USER_ID}`)
      .then(
        (result) => {
          setStatus({ type: "success" });
          console.log(result.text);
        },
        (error) => {
          setStatus({ type: "error" });
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ContactBanner>
        <div>
          <img src={contact} alt="contact" className="contact" />
        </div>
        <div className="contact-txt">
          <motion.h3 variants={titleAnim}>Vous avez des questions?</motion.h3>
          <motion.h2 variants={titleAnim}>
            Nous sommmes là pour vous aider.
          </motion.h2>
        </div>
      </ContactBanner>
      <ContactTitle>
        <div>
          <h2>
            Vous avez besoins des services de Jiskobou, ou tout simplement en
            savoir plus!?
          </h2>
          {status?.type === "success" && (
            <p className="success">
              Votre message a été envoyé, nous vous répondrons le plus
              rapidement possible. Merci
            </p>
          )}
          {status?.type === "error" && (
            <p className="error">
              Il y a eu un problème lors de l'envoie du message, veuillez
              recommencer, merci
            </p>
          )}
        </div>
      </ContactTitle>
      <StyledForm>
        <form onSubmit={sendEmail}>
          <div className="form">
            <div>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Nom et Prénom"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="Téléphone"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Courriel"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                className="input"
                placeholder="Sujet"
              />
            </div>
            <div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="input"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Envoyer" className="submit" />
          </div>
        </form>
      </StyledForm>
    </motion.div>
  );
};

const ContactBanner = styled.div`
  .contact {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    opacity: 0.5;
  }
  .contact-txt {
    position: absolute;
    top: 30%;
    left: 5%;
    color: #9e2b31;
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  @media (max-width: 480px) {
    .contact {
      height: 30vh;
    }
    .contact-txt {
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (orientation: landscape) {
    .contact {
      height: 50vh;
    }
    .contact-txt {
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
`;

const ContactTitle = styled.div`
  margin: 3rem;
  text-align: center;
  color: #e1c283;

  .success {
    color: green;
    font-size: 1rem;
  }
  .error {
    color: red;
  }

  h2 {
    font-weight: 400;
  }
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 5rem;
  .form {
    background: white;
    border-radius: 1rem;
    height: 100%;
  }
  .input {
    margin: 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.3rem solid #9e2b31;
    &:hover {
      border: 0.3rem solid #9e2b31;
      transition: all 0.3s ease;
    }
  }
  .submit {
    margin: 1rem;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    border: none;
    &:hover {
      color: white;
      background: #9e2b31;
      transition: all 0.5s ease;
    }
  }
`;

export default Contact;
