import React from "react";
import GlobalStyle from "./Components/GlobalStyle";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Emploi from "./Pages/Emploi";
import Newsletter from "./Pages/Newsletter";
import Footer from "./Components/Footer";
import { Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Helmet>
        <title>Jiskobou.com</title>
        <meta
          name="description"
          content="Jiskobou est le bon choix pour le placement de personnel infirmier et en soins de santé"
        />
        <meta
          name="keywords"
          content="Jiskobou, Placement, infirmier,infirmière, soins de santé"
        />
      </Helmet>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service_emploi">
            <Emploi />
          </Route>
          <Route path="/newsletter">
            <Newsletter />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
