import React from "react";
import { Button, Card, CardBody, Modal, Container, Row, Col, Alert } from "reactstrap";

import MercadoPagoLogin from "components/MercadoPagoLogin.js";
import googlePicture from "assets/img/icons/common/google.svg";
import { Shapes } from "components/styling/shapes";

export default class LandingHeader extends React.Component{
    
    state = {
        crearPerfilModal: false
    };
    
    toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
    };
    
    user_token = localStorage.getItem('userToken');
    logged_in = this.user_token !== null && this.user_token !== undefined && this.user_token !== "";
    
    render(){
        return (
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-5">
                    <Shapes color="primary"/>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                            <Col lg="12">
                                <h1 className="display-3 text-white">
                                Recibí donaciones{" "}
                                <span>a través de MercadoPago</span>
                                </h1>
                                <p className="lead text-white">
                                Recibí donaciones de manera simple, rápida y <b>directo a tu cuenta</b>
                                </p>
                                <div className="btn-wrapper mb-4" style={{textAlign: 'center'}}>
                                {this.logged_in ? (
                                ""
                                ) : (
                                <div>
                                    <Button
                                color="default"
                                type="button"
                                size="lg"
                                onClick={() => this.toggleModal("crearPerfilModal")}
                                >
                                INGRESÁ AHORA
                                </Button>
            
                                <Modal
                                className="modal-dialog-centered"
                                size="sm"
                                isOpen={this.state.crearPerfilModal}
                                toggle={() => this.toggleModal("crearPerfilModal")}
                                >
                                <div className="modal-body p-0">
                                    <Card className="bg-secondary shadow border-0">
                                    <CardBody className="px-lg-4 py-lg-4">
                                        <div className="text-center mb-4">
                                        INGRESAR A <b>PIFY</b>
                                        </div>
                                        <div className="text-center">
                                        <Row className="justify-content-center">
                                        <small className="mb-2">Te recomendamos</small>
                                        <Col lg="12">
                                            <MercadoPagoLogin />
                                        </Col>
                                        </Row>
            
                                        <Row className="justify-content-center">
                                        <small className="mt-2 mb-2">o sino</small>
                                        <Col lg="12">
                                        <Button
                                            className="btn-icon mb-2"
                                            color="danger"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            style={{width: '100%'}}
                                            disabled
                                        >
                                            <span className="btn-inner--icon">
                                            <img
                                                alt="..."
                                                src={googlePicture}
                                            />
                                            </span>
                                            <span className="btn-inner--text">INGRESAR CON GOOGLE</span>
                                        </Button>
                                        </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                        <Col lg="12">
                                            <Alert color="default" className="p-2">
                                            <strong><i className="fa fa-info-circle"/></strong> <small>El ingreso con Google se encuentra momentáneamente deshabilitado. Te pedimos disculpas.</small>
                                            </Alert>
                                        </Col>
                                        </Row>
                                        </div>
                                    </CardBody>
                                    </Card>
                                </div>
                                </Modal>
                                </div>
                                )
                                }
                                
            
                                </div>
                            </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 110"
                        />
                        </svg>
                    </div>
                </section>
            </div>
        )
    }
}