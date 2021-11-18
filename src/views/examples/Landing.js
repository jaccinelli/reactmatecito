import React from "react";

// reactstrap components

import {GET} from '../../components/http'

// core components

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import LandingHeader from "components/Landing/LandingHeader";
import LandingBody from "components/Landing/LandingBody";

class Landing extends React.Component {
  state = {
    crearPerfilModal: false
  };
  userData = {

  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <LandingHeader/>
          <LandingBody/>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
