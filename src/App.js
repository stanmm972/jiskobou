import React from "react";
import GlobalStyle from "./Components/GlobalStyle";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Emploi from "./Pages/Emploi";
import Footer from "./Components/Footer";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/a_propos">
          <About />
        </Route>
        <Route path="/services_emplois">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Emploi path="/emploi" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
