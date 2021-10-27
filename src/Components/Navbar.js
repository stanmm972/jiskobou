import React from "react";
import logo from "../Img/logo_new.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <img src={logo} id="logo" alt="logo" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>À propos de nous</li>
        <li>Services-Emploi</li>
        <li>Contactez-nous</li>
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
