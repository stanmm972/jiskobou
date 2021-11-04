import React from "react";
import GlobalStyle from "./Components/GlobalStyle";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Emploi from "./Pages/Emploi";
import Newsletter from "./Pages/Newsletter";
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
      <Footer />
    </div>
  );
}

export default App;
