import React from "react";
import styled from "styled-components";
import Infirmier from "../Img/infirmier.jpg";
import Infirmiere from "../Img/infirmiere.jpg";
import Equipe from "../Img/equipe.jpg";
import Soin from "../Img/soin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faHandSparkles,
  faUserTie,
  faUserShield,
  faFistRaised,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <HomeContainer className="home_container">
        <div>
          <img src={Infirmier} alt="infirmier" className="infirmier" />
        </div>
        <BannerText>
          <h2>Bienvenue à Jiskobou</h2>
          <h4>Le paradigme des soins.</h4>
        </BannerText>
        <BannerButton>
          <h3>Appliquez maintenant</h3>
        </BannerButton>
      </HomeContainer>
      <HomeTitle>
        <h2>
          Vous ferez chez nous, le bon choix pour le placement de personnel
          infirmier et en soins de santé
        </h2>
      </HomeTitle>
      <HomeIntro>
        <div className="infirmiere">
          <img src={Infirmiere} alt="infirmiere" />
        </div>
        <div className="intro_text">
          <h3>
            <FontAwesomeIcon icon={faQuoteLeft} alt="quote" className="quote" />
            Nous sommes une équipe motivée qui à pour mission d’offrir un
            service hors-pair aux hôpitaux, CHSLD, entreprises et particuliers
            sur tout l’île de Montréal et ses environs, en vous déléguant un de
            nos associés dûment qualifiés et expérimentés.
          </h3>
        </div>
      </HomeIntro>
      <GlobalVignette>
        <Vignette>
          <div className="vignette">
            <FontAwesomeIcon
              icon={faHandSparkles}
              size="6x"
              alt="qualite"
              className="vig"
            />
            <h3>Travail de qualité</h3>
          </div>
          <div className="vignette">
            <FontAwesomeIcon
              icon={faUserTie}
              size="6x"
              alt="professionnalisme"
              className="vig"
            />
            <h3>Professionnalisme</h3>
          </div>
          <div className="vignette">
            <FontAwesomeIcon
              icon={faUserShield}
              size="6x"
              alt="personnel"
              className="vig"
            />
            <h3>Personnel de qualité</h3>
          </div>
          <div className="vignette">
            <FontAwesomeIcon
              icon={faFistRaised}
              size="6x"
              alt="engagement"
              className="vig"
            />
            <h3>Engagement</h3>
          </div>
        </Vignette>
      </GlobalVignette>
      <SoinBloc>
        <SoinDiv>
          <div className="soin_txt" id="a_propos">
            <h3>
              Les établissements québécois de la santé travaillent fort, et la
              demande est toujours grandissante. Bien que vous preniez le temps
              de recruter et de former votre personnel, il arrivera que vous
              ayez besoin de renfort ou de remplacement, mais le temps et
              l’énergie requis peuvent être mieux placés ailleurs, dans votre
              contexte opérationnel. <br />
              Nous avons un volet spécialisé dans le placement de personnel en
              soins de santé. Grâce à une base de données de personnel qualifiée
              et soigneusement compilée, nous soutenons le recrutement
              occasionnel pour vous. <br />
              C’est ainsi que nous proposons des professionnels doués, qui sont
              capable d’intervenir rapidement pour assurer la continuité des
              services que vous offrez à votre clientèle. service de
              réadaptation et assistance médicale aux personnes âgées à
              domicile. Nous savons pertinemment que chaque établissement est
              organisé de manière différente, que chaque entreprise fonctionne
              selon ses propres particularités et que chaque individu a des
              besoins spécifiques.
              <br />
              Nous nous faisons donc un devoir de nous adapter aux divers
              milieux et organisations sollicitant nos services afin que nos
              employés s’intègrent le plus rapidement possible au cadre de leurs
              assignations. Choisir Jiskobou, c’est miser sur l’excellence et la
              tranquillité d’esprit!
            </h3>
          </div>
          <div>
            <img src={Soin} alt="soin" className="img_soin" />
          </div>
        </SoinDiv>
      </SoinBloc>
      <EquipeBloc>
        <img src={Equipe} alt="equipe" className="equipe" />
      </EquipeBloc>
      <Joindre>
        <JoindreCadre>
          <h2>Rejoignez l'équipe de Jiskobou!</h2>
          <h3>
            Nous sommes fiers d’une équipe de professionnels engagés que nous
            avons su bâtir. <br />
            Composée de plusieurs corps de métier et d’individus chevronnés,
            cette équipe pourrait devenir la vôtre aussi! <br />
            Venez faire partie de notre équipe profesionnelle et dynamique !
          </h3>
          <h4>Contactez-nous</h4>
        </JoindreCadre>
      </Joindre>
    </>
  );
};

const HomeContainer = styled.div`
  .infirmier {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    opacity: 0.5;
  }
  @media (max-width: 623px) {
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  color: #9e2b31;
  h2 {
    font-size: 4rem;
  }
  h4 {
    margin-top: 3rem;
    font-size: 2rem;
  }
  @media (max-width: 623px) {
    top: 30%;
    h2 {
      font-size: 2rem;
    }
    h4 {
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
  @media (max-width: 623px) {
    padding: 0.5rem 1rem;
    h3 {
      font-size: 1rem;
    }
  }
`;

const HomeTitle = styled.div`
  text-align: center;
  h2 {
    margin: 10rem 0rem;
    font-weight: 400;
    font-size: 2rem;
  }
  @media (max-width: 623px) {
    h2 {
      margin: 3rem 0rem;
      font-size: 1rem;
    }
  }
`;

const HomeIntro = styled.section`
  display: flex;
  margin: 5rem;
  justify-content: center;
  align-items: center;
  img {
    height: 50vh;
    object-fit: cover;
  }
  .intro_text {
    h3 {
      background: #bcb8b1;
      margin-left: 1rem;
      padding: 2rem;
      border-radius: 5px;
      color: whitesmoke;
    }
    .quote {
      margin-right: 1rem;
    }
  }
  @media (max-width: 623px) {
    display: grid;

    img {
      width: 345px;
      height: 35vh;
    }
    .intro_text {
      h3 {
        margin: 0rem 2rem;
        margin-top: 2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    display: grid;
    .intro_text {
      h3 {
        margin: 0rem 2rem;
        margin-top: 2rem;
      }
    }
  }
`;

const GlobalVignette = styled.div`
  margin: 15rem;
  @media (max-width: 623px) {
    margin: 8rem 0rem 0rem -8rem;
  }
`;

const Vignette = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .vignette {
    margin-left: 5rem;
    h3 {
      margin-top: 2rem;
      color: #8d99ae;
    }
    .vig {
      color: #e1c283;
    }
  }
  @media (max-width: 623px) {
    display: grid;
    .vignette {
      margin-left: 10rem;
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 1024px) {
    .vignette {
      margin-left: 3rem;
    }
  }
`;

const SoinBloc = styled.section`
  margin-top: 14rem;
  background: #9e2b31;
  @media (max-width: 623px) {
    margin-top: 4rem;
  }
`;
const SoinDiv = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-evenly;
  .img_soin {
    width: 100%;
    height: 38vh;
    object-fit: cover;
  }
  .soin_txt {
    width: 50%;
    h3 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 623px) {
    display: block;
    .soin_txt {
      width: 100%;
      margin-bottom: 1rem;
      h3 {
        font-size: 1rem;
        padding: 1rem;
      }
    }
  }
  @media (max-width: 1024px) {
    display: block;
    .soin_txt {
      width: 100%;
      margin-bottom: 1rem;
    }
    h3 {
      padding: 1rem;
    }
  }
`;

const EquipeBloc = styled.div`
  .equipe {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 623px) {
  }
`;

const Joindre = styled.section``;

const JoindreCadre = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 40vh;
  background: #9e2b31;
  color: #e1c283;
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
  @media (max-width: 623px) {
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
      padding: 1rem;
    }
  }
`;

export default Home;
