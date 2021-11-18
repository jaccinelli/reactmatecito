import React from "react";

// reactstrap components
import {
  Button,
  Spinner,
  Card,
  Row,
  Col,
  CardBody,
  Alert
} from "reactstrap";

import {GET, POST} from "../components/http";
import mpPicture from "assets/img/icons/common/mp.svg";
import bg_cf from "assets/img/theme/bg_cf.jpg";
import oauthAnimation from "assets/img/theme/oauth_animation.gif";
import {Shapes} from "components/styling/shapes";

export default class OAuth extends React.Component {

    state = {
        status: "loading"
    };

    query = new URLSearchParams(this.props.location.search);
    
    code;
    state;
    client;

    processOAuth(){
      let data = {
        code: this.code,
        state: this.state
      }
      POST("/mercadopago/oauth", data).then( result => {
        this.setState({["status"]: "logged"});
        localStorage.setItem("userToken", result['token'])
        localStorage.setItem('nickname', result['nickname'])
        window.location.href = "/";
      })
    }

    componentDidMount(){
      this.code = this.query.get('code')
      this.state = this.query.get('state')
      this.client = this.query.get('client')
      if(this.client == "mp"){
        this.processOAuth();
      }
    }

  render() {
    return (
      <>

      <section className="section section-lg section-shaped pb-5" style={{height: '100vh'}}>
        <Shapes color="pastel"/>
        <Row className="row-grid mt-5">
          <Col lg="12" className="text-center">
            <h2>Aguarde unos instantes por favor..</h2>
          </Col>
        </Row>
        
        <Row className="row-grid">
          <Col lg="12" className="text-center"><Spinner size="large" color="dark"></Spinner></Col>
        </Row>
        
        <Row className="row-grid">  
          <Col lg="12" className="text-center"><img src={oauthAnimation}/></Col>
        </Row>

      </section>
        
      </>
    );
  }
}
