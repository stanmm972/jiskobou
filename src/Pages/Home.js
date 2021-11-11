import React from "react";
import Banner from "../Components/Banner";
import Intro from "../Components/Intro";
import Vignette from "../Components/Vignette";
import Soin from "../Components/Soin";
import Joindre from "../Components/Joindre";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Banner />
      <Intro />
      <Vignette />
      <Soin />
      <Joindre />
    </motion.div>
  );
};

export default Home;
