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
          <li>À propos de nous</li>
        </Link>
        <Link to="/service_emploi" href="#">
          <li>Services et Emploi</li>
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

  @media (max-width: 480px) {
    min-height: 5vh;
    display: grid;
    justify-items: center;
    li {
      padding: 1vh;
    }
  }
  @media only screen and (orientation: landscape) {
    min-height: 20vh;
    justify-items: center;
    #logo {
      width: 28vh;
    }
    li {
      padding: 0rem 2rem;
    }
  }
`;

export default Navbar;
