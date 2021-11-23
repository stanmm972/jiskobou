import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Joindre = () => {
  return (
    <Joindres>
      <JoindreCadre>
        <h2>Rejoignez l'équipe de Jiskobou!</h2>
        <h3>
          Nous sommes fiers d’une équipe de professionnels engagés que nous
          avons su bâtir. <br />
          Composée de plusieurs corps de métier et d’individus chevronnés, cette
          équipe pourrait devenir la vôtre aussi! <br />
          Venez faire partie de notre équipe profesionnelle et dynamique !
        </h3>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <h4>Contactez-nous</h4>
        </Link>
      </JoindreCadre>
    </Joindres>
  );
};

const Joindres = styled.section``;

const JoindreCadre = styled.div`
  display: grid;
  text-align: center;
  justify-items: center;
  width: 100%;
  height: 62vh;
  color: #8d99ae;
  margin-top: 2rem;

  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-weight: 400;
  }
  h4 {
    background: #e0afa0;
    color: white;
    border-radius: 50px;
    padding: 2rem;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: white;
      background: #dec3ba;
      transition: all 0.5s ease;
    }
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
      padding: 1rem;
    }
  }
  @media (min-width: 481px) {
    height: 70vh;
    h4 {
      font-size: 1rem;
      padding: 1.3rem;
    }
  }
`;

export default Joindre;
