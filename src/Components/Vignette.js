import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideIcon } from "../Pages/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faUserTie,
  faUserShield,
  faFistRaised,
} from "@fortawesome/free-solid-svg-icons";

const Vignette = () => {
  return (
    <GlobalVignette>
      <Vignettes>
        <motion.div variants={slideIcon} className="vignette">
          <FontAwesomeIcon
            icon={faHandSparkles}
            size="6x"
            alt="qualite"
            className="vig"
          />
          <h3>Travail de qualité</h3>
        </motion.div>
        <motion.div variants={slideIcon} className="vignette">
          <FontAwesomeIcon
            icon={faUserTie}
            size="6x"
            alt="professionnalisme"
            className="vig"
          />
          <h3>Professionnalisme</h3>
        </motion.div>
        <motion.div variants={slideIcon} className="vignette">
          <FontAwesomeIcon
            icon={faUserShield}
            size="6x"
            alt="personnel"
            className="vig"
          />
          <h3>Personnel de qualité</h3>
        </motion.div>
        <motion.div variants={slideIcon} className="vignette">
          <FontAwesomeIcon
            icon={faFistRaised}
            size="6x"
            alt="engagement"
            className="vig"
          />
          <h3>Engagement</h3>
        </motion.div>
      </Vignettes>
    </GlobalVignette>
  );
};

const GlobalVignette = styled.div`
  margin: 15rem;
  @media (max-width: 480px) {
    margin: 2rem 0rem 0rem -8rem;
  }
`;

const Vignettes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .vignette {
    margin-left: 5rem;
    h3 {
      margin-top: 2rem;
      color: #8d99ae;
    }
    .vig {
      color: #e1c283;
    }
  }
  @media (max-width: 480px) {
    display: grid;
    .vignette {
      margin-left: 10rem;
      margin-bottom: 5rem;
    }
  }
  @media (min-width: 481px) {
    .vignette {
      margin-left: 3rem;
      margin-bottom: 5rem;
    }
  }
  @media (min-width: 760px) {
    .vignette {
      margin-left: 3rem;
    }
  }
`;

export default Vignette;
