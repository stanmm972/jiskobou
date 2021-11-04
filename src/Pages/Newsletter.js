import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Newsletter = () => {
  return (
    <StyleNews
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>Newsletter</title>
        <meta name="description" content="Avoir les dernières actualités" />
      </Helmet>
      <h1>Newsletter</h1>
      <FontAwesomeIcon
        icon={faSpinner}
        alt="travaux"
        className="travaux"
        size="10x"
      />
      <h3>
        Notre page est présentement en préparation, revenez voir cette page très
        bientôt.
      </h3>
    </StyleNews>
  );
};

const StyleNews = styled(motion.div)`
  display: block;
  text-align: center;
  height: 50vh;
  padding: 5rem;
  .travaux {
    color: #e1c283;
  }
  h1 {
    margin-bottom: 2rem;
    color: #9e2b31;
  }
  h3 {
    margin-top: 4rem;
    color: #9e2b31;
    font-weight: 400;
  }

  @media (max-width: 623px) {
    height: 70vh;
  }
`;

export default Newsletter;
