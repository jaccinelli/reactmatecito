import React from "react";
import { Link, Redirect } from "react-router-dom";
import Headroom from "headroom.js";
import googlePicture from "assets/img/icons/common/google.svg";
import logoImg from "assets/img/brand/logo.png";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Modal,
  Card,
  CardBody,
  Alert,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import MercadoPagoLogin from "components/MercadoPagoLogin";

class DemoNavbar extends React.Component {
  
  user_token = localStorage.getItem('userToken');

  state = {
    loginModal: false,
    collapseClasses: "",
    navigateProfile: false,
    navigateHistory: false,
    collapseOpen: false,
    logged_in: this.user_token !== null && this.user_token !== undefined && this.user_token !== ""
  };
  
  
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  logout(e){
    e.preventDefault();
    this.setState({["logged_in"]: false});
    localStorage.setItem('nickname', "")
    localStorage.setItem('userToken', "")
    
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    if (this.state.navigateProfile) {
      return <Redirect to="/perfil" push={true} />
    }
    return (
      <>
      
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={logoImg}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={logoImg}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Explorar
                  </NavLink>
                </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    
                      {this.state.logged_in ? (
                        <div>
                          <UncontrolledDropdown>
                            <DropdownToggle caret color="secondary">
                              {localStorage.getItem('nickname')}
                            </DropdownToggle>
                            <DropdownMenu>
                              <Link to="/perfil" className="text-dark">
                                <DropdownItem>
                                  <i className="fa fa-user mr-2" /> Mi perfil
                                </DropdownItem>
                              </Link>
                              <Link to="/" className="text-dark">
                                <DropdownItem>
                                  <i className="fa fa-history mr-2" /> Pify recibidos
                                </DropdownItem>
                              </Link>
                              <DropdownItem onClick={e => this.logout(e)}>
                                <Link to="/" className="text-dark">
                                  <i className="fa fa-sign-out mr-2" /> Cerrar Sesión
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      ) : (
                        <Button
                          color={this.state.logged_in ? 'warning' : 'secondary'}
                          type="button"
                          onClick={() => this.toggleModal("loginModal")}
                        >
                        <div>
                          <span className="btn-inner--icon">
                          <i className="fa fa-sign-in mr-2" />
                          </span>
                          <span className="nav-link-inner--text ml-1">
                            INGRESAR
                          </span>
                        </div>
                        </Button>
                      )
                      }
                      
                    
                    <Modal
                        className="modal-dialog-centered"
                        size="sm"
                        isOpen={this.state.loginModal}
                        toggle={() => this.toggleModal("loginModal")}
                      >
                        <div className="modal-body p-0">
                          <Card className="bg-secondary shadow border-0">
                            <CardBody className="px-lg-4 py-lg-4">
                              <div className="text-center mb-4">
                                INGRESAR A <b>PIFY</b>
                              </div>
                              <div className="text-center">
                              <Row className="justify-content-center">
                                <Col lg="12">
                                
                                  <MercadoPagoLogin />
                                </Col>
                              </Row>

                              <Row className="justify-content-center mt-2">
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
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
