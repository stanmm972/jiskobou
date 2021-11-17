import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { photoAnim, slideBloc } from "../Pages/animation";
import Team from "../Img/team.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <>
      <HomeTitle>
        <h2>
          Vous ferez chez nous, le bon choix pour le placement de personnel en
          soins de santé
        </h2>
      </HomeTitle>
      <HomeIntro>
        <div className="infirmiere">
          <motion.img variants={photoAnim} src={Team} alt="team" />
        </div>
        <div className="intro_text">
          <motion.h3 variants={slideBloc}>
            <FontAwesomeIcon icon={faQuoteLeft} alt="quote" className="quote" />
            Nous sommes une équipe motivée qui à pour mission d’offrir un
            service hors-pair aux hôpitaux, CHSLD, entreprises et particuliers
            sur tout l’île de Montréal et ses environs, en vous déléguant un de
            nos associés dûment qualifiés et expérimentés.
          </motion.h3>
        </div>
      </HomeIntro>
    </>
  );
};

const HomeTitle = styled.div`
  text-align: center;
  h2 {
    margin: 10rem 0rem;
    font-weight: 400;
    font-size: 2.5rem;
    color: #8d99ae;
  }
  @media (max-width: 480px) {
    h2 {
      margin: 3rem 0rem;
      font-size: 1rem;
    }
  }
  @media (min-width: 481px) {
    h2 {
      margin: 5rem 0rem;
      font-size: 1.7rem;
    }
  }
`;

const HomeIntro = styled.section`
  display: flex;
  margin: 5rem;
  justify-content: center;
  align-items: center;
  img {
    height: 50vh;
    object-fit: cover;
  }
  .intro_text {
    h3 {
      background: #bcb8b1;
      margin-left: 1rem;
      padding: 2rem;
      border-radius: 5px;
      color: whitesmoke;
    }
    .quote {
      margin-right: 1rem;
    }
  }
  @media (max-width: 480px) {
    display: grid;

    img {
      width: 345px;
      height: 35vh;
    }
    .intro_text {
      h3 {
        margin: 6rem 0rem;
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 481px) {
    display: grid;
    img {
      width: 621px;
      height: 42vh;
    }
    .intro_text {
      h3 {
        margin: 0rem 2rem;
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    img {
      width: 706px;
      height: 33vh;
    }
  }
  @media only screen and (orientation: landscape) {
    img {
      width: 721px;
      height: 123vh;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    img {
      width: 768px;
      height: 45vh;
    }
    .intro_text {
      h3 {
        margin: 0rem 2rem;
        margin-top: 2rem;
      }
    }
  }
  @media only screen and (min-device-width: 880px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: grid;
    img {
      width: 865px;
      height: 70vh;
    }
  }
`;

export default Intro;
