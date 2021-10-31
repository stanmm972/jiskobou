import React from "react";
import styled from "styled-components";
import emploi from "../Img/emploi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Emploi = () => {
  return (
    <>
      <EmploiBanner>
        <div>
          <img src={emploi} alt="emploi" className="emploi" />
        </div>
        <div className="emploi-txt">
          <h2>Nos emplois</h2>
        </div>
      </EmploiBanner>
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
        <div>
          <h3>Postulez dès maintenant</h3>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} alt="phone" />
          (514)465-9002
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} alt="email" />
          jiskobou.inc@gmail.com
        </div>
      </EmploiDesc>
    </>
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

const EmploiDesc = styled.section`
  text-align: center;
  height: 50vh;
  .emploi-title {
    margin: 5rem;
    h2 {
      font-size: 4rem;
      font-weight: 400;
    }
  }
  .emploi-desc {
    margin: 3rem;
    h3 {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
`;

export default Emploi;
