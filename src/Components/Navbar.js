import React from "react";
import { useState } from "react";
import logo from "../Img/logo_new.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNav>
      <div>
        <Link to="/" href="#">
          <img src={logo} id="logo" alt="logo" />
        </Link>
      </div>

      <NavMenu className="nav_menu">
        <ul
          className={menuOpen ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMenuOpen(false)}
        >
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
      </NavMenu>

      <div className="mobile_menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} alt="close" className="close" />
        ) : (
          <FontAwesomeIcon icon={faBars} alt="menu" className="menu" />
        )}
      </div>
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

  .mobile_menu_icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .nav-links {
      display: none;
    }
    .nav_menu {
      li {
        padding-left: 1rem;
        &:hover {
          background: #b55b5f;
          transition: all 0.5s ease;
        }
      }
    }
    .nav-links-mobile {
      display: block;
      list-style: none;
      background: #9e2b31;
    }
    .mobile_menu_icon {
      position: absolute;
      display: block;
      border: none;
      outline: none;
      top: 5vh;
      right: 4vh;
      font-size: 20px;
      background: #9e2b31;
      transition: all 0.8s ease;
      .menu {
        color: #e1c283;
      }
      .close {
        color: #e1c283;
      }
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

const NavMenu = styled.nav`
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
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;
export default Navbar;
