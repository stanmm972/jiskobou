import React from "react";
import styled from "styled-components";
import Equipe from "../Img/equipe.jpg";
import Soins from "../Img/soin.jpg";

const Soin = () => {
  return (
    <>
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
            <img src={Soins} alt="soin" className="img_soin" />
          </div>
        </SoinDiv>
      </SoinBloc>
      <EquipeBloc>
        <img src={Equipe} alt="equipe" className="equipe" />
      </EquipeBloc>
    </>
  );
};

const SoinBloc = styled.section`
  display: flex;
  margin: 10rem 0;
  @media (max-width: 623px) {
    margin-top: 4rem;
  }
`;
const SoinDiv = styled.div`
  display: flex;
  .img_soin {
    height: 57vh;
    width: 100%;
    padding: 2rem;
    object-fit: cover;
  }
  .soin_txt {
    width: 100%;
    h3 {
      font-size: 1.2rem;
      color: whitesmoke;
      border-radius: 5px;
      background: #bcb8b1;
      object-fit: cover;
    }
  }
  @media (max-width: 480px) {
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
  @media (min-width: 481px) {
    display: grid;
    justify-items: center;
    padding: 0;
    .img_soin {
      height: 119vh;
    }
    h3 {
      font-size: 1rem;
      padding: 1rem;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    .img_soin {
      object-fit: cover;
      height: 57vh;
      width: 100%;
    }
    .soin_txt {
      width: 100%;
      margin-bottom: 1rem;
    }
    h3 {
      padding: 2rem;
      margin: 2rem;
    }
  }
  @media only screen and (min-device-width: 880px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: flex;
    .img_soin {
      height: 100vh;
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
  @media only screen and (orientation: landscape) {
    .equipe {
      width: 100%;
      height: 70vh;
    }
  }
`;

export default Soin;
