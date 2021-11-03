import React from "react";
import styled from "styled-components";
import emploi from "../Img/emploi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

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
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Infirmiers, infirmières
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Infirmiers et infirmières auxiliaires
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Inhalothérapeutes
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Préposés aux bénéficiaires
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  alt="check"
                  className="check_icon"
                />
                Secrétaires médicales
              </li>
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
  }
  .service-job {
    li {
      list-style: none;
      margin-bottom: 1rem;
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