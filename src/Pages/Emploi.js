import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
import { titleAnim, slideText } from "./animation";
import emploi from "../Img/emploi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Emploi = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>Nos emplois et services</title>
        <meta name="description" content="Débutez une carrière chez Jiskobou" />
      </Helmet>
      <EmploiBanner>
        <div>
          <img src={emploi} alt="emploi" className="emploi" />
        </div>
        <div className="emploi-txt">
          <motion.h2 variants={titleAnim}>Nos emplois</motion.h2>
        </div>
      </EmploiBanner>

      <ServiceContainer id="services">
        <ServiceTitle>
          <h3>Services offerts et ressources disponibles</h3>
        </ServiceTitle>
        <ServiceDesc>
          <div>
            <h4 className="description-txt">
              Notre équipe est composée de ressources triées sur le volet afin
              de satisfaire aux plus hauts standards de l'industrie. <br />
              Parmi les ressources disponibles avec notre agence afin de
              supporter adéquatement vos équipes déjà en place.
            </h4>
          </div>
          <div className="service-job">
            <ul>
              <motion.li variants={slideText}>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Infirmiers, infirmières
              </motion.li>
              <motion.li variants={slideText}>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Infirmiers et infirmières auxiliaires
              </motion.li>
              <motion.li variants={slideText}>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Inhalothérapeutes
              </motion.li>
              <motion.li variants={slideText}>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Préposés aux bénéficiaires
              </motion.li>
              <motion.li variants={slideText}>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Secrétaires médicales
              </motion.li>
            </ul>
          </div>
        </ServiceDesc>
      </ServiceContainer>

      <EmploiDesc>
        <div className="emploi-title">
          <h2>Débutez une carrière chez Jiskobou</h2>
        </div>
        <div className="emploi-desc">
          <h3>
            La page est présentement en travaux mais vous pouvez toujours nous
            rejoindre par courriel ou par téléphone.
          </h3>
        </div>
        <div className="apply">
          <h3>Postulez dès maintenant</h3>
        </div>
        <div className="apply_info">
          <h4>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              alt="phone"
              className="apply_icon"
            />
            <a href="tel:+1-514-465-9002">514-465-9002</a>
          </h4>
        </div>
        <div className="apply_info">
          <h4>
            <FontAwesomeIcon
              icon={faEnvelope}
              alt="email"
              className="apply_icon"
            />
            <a href="mailto:jiskobou.inc@gmail.com">jiskobou.inc@gmail.com</a>
          </h4>
        </div>
      </EmploiDesc>
    </motion.div>
  );
};

const EmploiBanner = styled.div`
  .emploi {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    opacity: 0.5;
  }
  .emploi-txt {
    position: absolute;
    top: 30%;
    left: 5%;
    color: #9e2b31;
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 623px) {
    .emploi {
      height: 30vh;
    }
    .emploi-txt {
      h2 {
        font-size: 2rem;
      }
    }
  }
`;

const ServiceContainer = styled.div`
  display: block;
  height: 70vh;
`;

const ServiceTitle = styled.div`
  margin: 10rem;
  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: #e1c283;
  }
  @media (max-width: 623px) {
    margin: 1rem;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 5rem;
    }
  }
`;

const ServiceDesc = styled.div`
  display: flex;
  align-items: center;
  margin: 10rem;
  .description-txt {
    margin-right: 10rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: #9e2b31;
  }
  .service-job {
    li {
      list-style: none;
      margin-bottom: 1rem;
      color: #9e2b31;
      &:hover {
        transform: scale(1.5);
        transition: all 0.5s ease;
      }
      .check_icon {
        color: green;
        margin-right: 1rem;
      }
    }
  }
  @media (max-width: 623px) {
    margin: 1rem;
    .description-txt {
      margin-right: 3rem;
      font-size: 0%.8rem;
    }
    .service-job {
      ul {
        font-size: 0.8rem;
      }
    }
  }
`;

const EmploiDesc = styled.section`
  text-align: center;
  height: 50vh;
  background: #9e2b31;
  padding: 3rem;
  .emploi-title {
    margin-bottom: 5rem;
    h2 {
      color: #e1c283;
      font-size: 4rem;
      font-weight: 400;
    }
  }
  .emploi-desc {
    margin: 3rem;
    h3 {
      color: #e1c283;
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
  .apply {
    h3 {
      color: #e1c283;
    }
  }
  .apply_info {
    h4 {
      color: whitesmoke;
    }
    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }
  .apply_icon {
    margin-right: 0.5rem;
    color: whitesmoke;
    &:hover {
      color: #e1c283;
      cursor: pointer;
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 623px) {
    .emploi-title {
      margin: 2rem;
      h2 {
        font-size: 1.6rem;
      }
    }
    .emploi-desc {
      margin: 1.5rem;
      h3 {
        font-size: 1rem;
      }
    }
  }
`;

export default Emploi;
