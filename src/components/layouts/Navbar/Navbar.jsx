import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import ImgAngelsLogo from '../../images/Logos/img-angels-logo';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <Container fluid className="align-content-center">
            <Link
              to="/"
              className="svg-size-logo js-scroll-trigger text-secondary text-uppercase align-content-center pointer"
            >
              <ImgAngelsLogo />
            </Link>
            <span className="lead font-weight-bold text-white d-none d-lg-flex">
              ⭐ SAME DAY PICK UP 24/7 ⭐
            </span>
            <Navbar.Toggle
              aria-label="Toggle navigation"
              aria-controls="navbarResponsive"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto mt-2 my-lg-0 ">
                {/* Desktop Menu */}
                <li className="nav-item my-dropdown d-none d-lg-inline nav-li-m-top">
                  <a
                    className="nav-link text-uppercase"
                    href="tel:+16179976510"
                  >
                    <i className="fas fa-phone mr-2 text-primary"></i>
                    <span className="text-primary">Cell:</span> (617) 997-6510
                  </a>
                </li>
                <li className="nav-item my-dropdown d-none d-lg-inline nav-li-m-top">
                  <a
                    className="nav-link text-uppercase"
                    href="tel:+17819363974"
                  >
                    <i className="fas fa-phone mr-2 text-primary"></i>
                    <span className="text-primary">Office:</span> (781) 936-3974
                  </a>
                </li>
                <li className="nav-item my-dropdown d-none d-lg-inline nav-li-m-top">
                  <a
                    className="nav-link text-uppercase"
                    href="https://goo.gl/maps/MZFJ1hR87hQpDgK16"
                    target="_blank"
                  >
                    <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                    87 County Rd, Plympton, MA 02367
                  </a>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <a
                    className="btn-nav nav-link text-uppercase py-2 ml-4 drop-shadow pointer"
                    href="tel:+16179976510"
                  >
                    Call Us
                  </a>
                </li>
                {/* Mobile Menu */}
                <Link to="/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="mt-5 bg-secondary border-menu-item-top">
                      <div className="d-flex">
                        <i className="fas fa-home mt-3 mr-3 text-white"></i>
                        <span
                          className="nav-button text-uppercase drop-shadow"
                          to="/"
                        >
                          Home
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                {/* <Container className="bg-primary text-center">
                  <p className="text-secondary font-weight-bold">
                    Contact us today
                  </p>
                </Container> */}
                <Link to="/contact-us/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Row>
                      <Container>
                        <Col
                          xs={12}
                          className="py-3 bg-primary container justify-content-center align-items-center border-menu-contact"
                        >
                          <span className="nav-button text-uppercase text-white">
                            <p className="mobile-menu-contact-text text-secondary mb-4">
                              Call us to schedule a same day pick up
                            </p>
                            <p className="mobile-menu-contact-text text-secondary mb-4">
                              We are available 24/7
                            </p>
                            <p className="mobile-menu-contact-text text-secondary">
                              💵 Get CASH today! 💵
                            </p>
                          </span>
                        </Col>
                      </Container>
                    </Row>
                  </li>
                </Link>
                <li className="nav-item mx-3 d-lg-none">
                  <Row>
                    <Container>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-left"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="tel:+16179976510"
                        >
                          <i className="fas fa-phone mr-3 text-white"></i>Call
                        </a>
                      </Col>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-right"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="mailto:angelstowing@hotmail.com?Subject=Important%20Email%20From%20Website"
                          target="_blank"
                        >
                          <i className="fas fa-envelope mr-3 text-white"></i>
                          Email
                        </a>
                      </Col>
                    </Container>
                  </Row>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
