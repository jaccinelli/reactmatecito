import React from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";

export default class LandingBody extends React.Component{
    
    render(){
        return (
        <section className="section section-lg pt-lg-0 mt-1">
            <h1 className="display-2 text-black" style={{textAlign: 'center'}}>
                Ok pero.. ¿Por qué esta plataforma y no otra?
            </h1>
            <h1 className="display-2 lead text-black mb-5" style={{textAlign: 'center'}}>
                Bueno, estas son algunas de las razones:
            </h1>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white mb-4">
                            <i className="ni ni-active-40" />
                          </div>
                          
                          <span className="text-warning text-uppercase ml-4">
                            SIN COSTOS
                          </span>
                          <h6>
                            <b>Pify</b> es una app sin costo que únicamente cobra el <b>2%</b> de comisión de cada aporte que te hagan.
                          </h6>
                          <h6><b>Aunque</b>, si el <b>motivo</b> de tu recaudación es <b>benéfico</b>, no cobramos <b>absolutamente nada</b>.</h6>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white mb-4">
                            <i className="ni ni-satisfied" />
                          </div>
                          <span className="text-success text-uppercase ml-4">
                            DISTRIBUIMOS
                          </span>
                          <h6>
                            Creemos que entre todos podemos más.
                            </h6>
                            <h6>Por este motivo, el <b>50%</b> de lo que la plataforma recauda con las comisiones mensualmente
                            <b> se sortea</b> entre todas las causas benéficas una vez al mes.
                          </h6>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <span className="text-info text-uppercase ml-4">
                            DIRECTO A TU CUENTA
                          </span>
                          <h6>
                            <b>Pify</b> no entra nunca en contacto con el dinero.
                          </h6>
                          <h6>
                          Cada vez que
                            alguien realiza un aporte a tu perfil, el dinero va directo desde la cuenta
                            del aportante a tu cuenta de mercadopago.
                          </h6>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
        </section>
        )
    }
}