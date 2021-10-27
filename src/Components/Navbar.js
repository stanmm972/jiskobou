import React from "react";
import logo from "../Img/logo_new.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <Link to="/" href="#">
          <img src={logo} id="logo" alt="logo" />
        </Link>
      </div>
      <ul>
        <Link to="/" href="#">
          <li>Accueil</li>
        </Link>
        <Link to="/a_propos" href="#">
          <li>À propos de nous</li>
        </Link>
        <Link to="/services_emplois" href="#">
          <li>Services-Emploi</li>
        </Link>
        <Link to="/contact" href="#">
          <li>Contactez-nous</li>
        </Link>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #9e2b31;
  a {
    color: #e1c283;
    text-decoration: none;
  }
  #logo {
    height: 100%;
    width: 20vh;
    object-fit: cover;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    color: #e1c283;
  }
  li {
    padding-left: 5rem;
    &:hover {
      transition: all 0.5s ease;
      color: white;
    }
  }

  @media (max-width: 1024px) {
    min-height: 5vh;
    flex-direction: column;
    #logo {
      width: 100%;
      height: 10vh;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      padding: 0rem 0rem 1rem;
      li {
        font-size: 12px;
      }
    }
  }
`;

export default Navbar;
