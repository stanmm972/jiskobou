import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../Pages/animation";
import Video from "../video/vid.mp4";

const Banner = () => {
  return (
    <HomeContainer className="home_container">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          left: "0",
          top: "10%",
          height: "90vh",
          objectFit: "cover",
        }}
      >
        <source
          src={Video}
          type="video/mp4"
          alt="infirmier"
          className="infirmier"
        />
      </video>
      <BannerText>
        <motion.h2 variants={titleAnim}>Bienvenue à Jiskobou</motion.h2>
        <motion.h4 variants={titleAnim}>Le paradigme des soins.</motion.h4>
      </BannerText>
      <BannerButton>
        <Link
          to="/service_emploi"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <h3>Appliquez maintenant</h3>
        </Link>
      </BannerButton>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .infirmier {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    opacity: 0.5;
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  color: #9e2b31;

  @media (max-width: 480px) {
    top: 30%;
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media (min-width: 481px) {
    top: 50%;
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 2rem;
    }
  }
  @media (min-width: 1280px) {
    h2 {
      font-size: 5rem;
    }
    h4 {
      margin-top: 3rem;
      font-size: 2rem;
    }
  }

  @media only screen and (min-device-width: 880px) and (max-device-width: 1024px) and (orientation: landscape) {
    top: 45%;
    h2 {
      font-size: 2rem;
    }
    h4 {
      margin-top: 3rem;
      font-size: 1rem;
    }
  }
`;

const BannerButton = styled.div`
  position: absolute;
  top: 80%;
  left: 5%;
  background: #9e2b31;
  border-radius: 50px;
  color: white;
  padding: 1rem 2rem;
  &:hover {
    cursor: pointer;
    color: #e1c283;
    background: #8d99ae;
    transition: all 0.5s ease;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    h3 {
      font-size: 1rem;
    }
  }
  @media (min-width: 481px) {
    padding: 0.5rem 1rem;
    h3 {
      font-size: 1rem;
    }
  }
  @media (min-width: 1200px) {
    top: 80%;
    padding: 1rem 2rem;
  }
`;

export default Banner;
