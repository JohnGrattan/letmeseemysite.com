import React from 'react';
import { Link, Image } from 'gatsby';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import ImgMDHLogo from '../../ImageComps/image-mdh-logo';
import ImgMdhTruckMenu from '../../ImageComps/img-mdh-truck-menu';
import ImgTopRatedMenu from '../../ImageComps/img-top-rated-menu';
import ImgLicensedMenu from '../../ImageComps/img-licensed-menu';
import ImgServiceAreaMenu from '../../ImageComps/img-service-area-menu';
import ImgExteriorServicesMenu from '../../ImageComps/img-exterior-services-menu';
import ImgInteriorServicesMenu from '../../ImageComps/img-interior-services-menu';
import ImgInsulationServicesMenu from '../../ImageComps/img-insulation-services-menu';

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
          <Container className="align-content-center">
            <Link
              to="/"
              className="svg-size-logo js-scroll-trigger text-secondary text-uppercase align-content-center pointer"
            >
              <ImgMDHLogo />
            </Link>
            <Navbar.Toggle
              aria-label="Toggle navigation"
              aria-controls="navbarResponsive"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto mt-2 my-lg-0">
                {/* Desktop Menu */}
                <li className="nav-item my-dropdown my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/about">
                    About <i className="fas fa-angle-down ml-1"></i>
                  </Link>
                  <Row className="my-dropdown-menu px-2 py-3 mt-0 rounded drop-shadow">
                    <Col lg={3}>
                      <Link to="/who-we-are">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgMdhTruckMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/who-we-are"
                      >
                        Who We Are
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/what-we-do">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgLicensedMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/what-we-do"
                      >
                        Licensing And Insurance
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/ratings-and-memberships">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgTopRatedMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/ratings-and-memberships"
                      >
                        Ratings And Memberships
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/service-area">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgServiceAreaMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/service-area"
                      >
                        Service Area
                      </Link>
                    </Col>
                  </Row>
                </li>

                <li className="nav-item my-dropdown my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/services">
                    Services <i className="fas fa-angle-down ml-1"></i>
                  </Link>
                  <Row className="my-dropdown-menu px-2 py-3 mt-0 rounded drop-shadow">
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgExteriorServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Exterior
                      </Link>
                    </Col>
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgInteriorServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Interior
                      </Link>
                    </Col>
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgInsulationServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Weatherization
                      </Link>
                    </Col>
                  </Row>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/employment">
                    Employment
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link
                    className="btn-nav nav-link text-uppercase py-2 ml-4 drop-shadow pointer"
                    to="/contact"
                  >
                    <span className="drop-shadow">Contact</span>
                  </Link>
                </li>
                {/* Mobile Menu */}
                <li className="nav-item mx-3 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/about"
                      >
                        About
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/services"
                      >
                        Services
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-3 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/gallery"
                      >
                        Gallery
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/reviews"
                      >
                        Reviews
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-3 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/employment"
                      >
                        Employment
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-3 d-lg-none">
                  <div className="row">
                    <div className="col-12 mt-4 py-3 bg-primary container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase text-dark"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-3 d-lg-none">
                  <div className="row">
                    <div className="col-6 py-3 bg-dark container justify-content-center align-items-center">
                      <a
                        className="nav-button text-uppercase drop-shadow-dark"
                        href="tel:+14012169868"
                      >
                        <i className="fas fa-phone mr-3 text-primary"></i>Call
                      </a>
                    </div>
                    <div className="col-6 py-3 bg-info container justify-content-center align-items-center">
                      <a
                        className="nav-button text-uppercase drop-shadow-dark"
                        href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                        target="_blank"
                      >
                        <i className="fas fa-envelope mr-3 text-primary"></i>
                        Email
                      </a>
                    </div>
                  </div>
                </li>
                <div className="d-lg-none mt-4 mb-1 text-center text-white">
                  <a href="#">
                    <i className="fab fa-2x fa-facebook px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-instagram px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-twitter px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-youtube px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-linkedin px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-github px-2"></i>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
