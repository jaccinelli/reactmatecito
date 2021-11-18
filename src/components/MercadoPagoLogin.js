import React from "react";

// reactstrap components
import {
  Button,
  Spinner
} from "reactstrap";

import {GET} from "./http";
import mpPicture from "assets/img/icons/common/mp.svg";

export default class MercadoPagoLogin extends React.Component {

    state = {
        logueando: false
    };

    async loginMP() {
        this.setState({["logueando"]: true})
        GET("/mercadopago/genOauthLink").then( result => {
          this.setState({["logueando"]: false});
          window.location.href = result['url'];
        })
    }

    handleClick(e) {
        this.loginMP();
    }

  render() {
    return (
      <>
        <Button
            className="btn-icon"
            color="secondary"
            onClick={this.handleClick.bind(this)}
            style={{width: '100%'}}
            disabled={this.state.logueando ? true : false}
            >
            {this.state.logueando ? (
              <div>
              <Spinner size="sm"></Spinner> INGRESANDO..
              </div>
            ) : (
              <div>
                <span className="btn-inner--icon">
                  <img
                  alt="..."
                  src={mpPicture}
                  />
                </span>
                <span className="btn-inner--text">
                  INGRESAR CON MERCADOPAGO
                </span>
              </div>
            )
            }
            
        </Button>
      </>
    );
  }
}
