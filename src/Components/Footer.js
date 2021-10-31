import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Img/logo_new.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Pics>
        <img src={Logo} alt="logo" />
        <h3>
          Notre objectif est de fournir des opportunités dans les meilleurs
          endroits.
        </h3>
      </Pics>
      <FooterInfo>
        <Item>
          <h2>Notre compagnie</h2>
          <h3>À propos de nous</h3>
          <h3>Newsletter</h3>
        </Item>
        <Item>
          <h2>Nos services et emplois</h2>
          <h3>Offre d'emploi</h3>
          <h3>Recherche de professionnels</h3>
        </Item>
        <Item>
          <h2>Contactez-nous</h2>
          <h3>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="icon_extra"
              alt="call"
            />
            (514)465-9002
          </h3>
          <h3>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon_extra"
              alt="email"
            />
            jiskobou.inc@gmail.com
          </h3>
        </Item>
      </FooterInfo>
      <div className="media">
        <MediaIcon>
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon"
            size="2x"
            alt="Facebook"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="icon"
            size="2x"
            alt="Twitter"
          />
        </MediaIcon>
        <h4>Copyright@2020 | Developed by FredMM</h4>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #e1c283;
  background: #8d99ae;
  .icon {
    &:hover {
      cursor: pointer;
      color: white;
      transition: all 0.5s ease;
    }
  }
  .media {
    margin: 2rem;
  }

  @media (max-width: 623px) {
    font-size: 0.5rem;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Pics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    height: 20vh;
    object-fit: cover;
  }
  h3 {
    margin-bottom: 3rem;
  }
  @media (max-width: 623px) {
    img {
      width: 100px;
      height: 10vh;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
`;

const Item = styled.div`
  margin-left: 3rem;
  h2 {
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
  h3 {
    font-weight: lighter;
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
      color: white;
      transition: all 0.5s ease;
    }
  }
  .icon_extra {
    margin-right: 1rem;
  }
  @media (max-width: 623px) {
    margin-left: 1rem;
    h2 {
      margin-bottom: 1rem;
      font-size: 8px;
    }
  }
`;

const MediaIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default Footer;
