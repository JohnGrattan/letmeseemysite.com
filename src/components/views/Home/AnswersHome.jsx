import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgCarLogos from '../../images/Pages/Home/img-car-logos';
import ImgCarModels from '../../images/Pages/Home/img-car-models';
import ImgCarCondition from '../../images/Pages/Home/img-car-condition';

const AnswersHome = () => {
  return (
    <section className="bg-light">
      <Container className="bg-light py-5">
        <h2 className="display-4 font-weight-bold text-secondary mb-5">
          Scrap Your Vehicle for Top Dollar
        </h2>
        <Row className="py-5 my-5">
          <Col xs={12} lg={6} className="px-4 order-0 order-lg-0">
            <ImgCarLogos />
          </Col>
          <Col xs={12} lg={6} className="px-4 order-1 order-lg-1">
            <h3 className="text-dark">We Buy Any Make</h3>
            <p className="lead">
              From major brands to foreign companies, we accept them all!
              Contact us today to find out how much your vehicle is worth and
              we'll schedule a tow right away.
            </p>
            <ul>
              <li>Buick, Cadillac, Chevrolet, GMC, Pontiac, Saturn</li>
              <li>Chrysler, Dodge, Fiat, Jeep, Ram</li>
              <li>Ford, Lincoln, Mercury, Honda, Acura</li>
              <li>Toyota, Lexus, Subaru, Mazda</li>
              <li>Nissan, Infiniti, Mitsubishi, Hyundai, Kia</li>
              <li>Many More...</li>
            </ul>
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col xs={12} lg={6} className="px-4 order-0 order-lg-1">
            <ImgCarModels />
          </Col>
          <Col xs={12} lg={6} className="px-4 order-1 order-lg-0">
            <h3 className="text-dark">We Buy Any Model</h3>

            <p className="lead">
              People always need scrap parts for older model vehicles, so don't
              think that junker is worthless! We'll take a close look at any
              model and offer you cash in hand.
            </p>
            <ul>
              <li>Cars, trucks, SUVs, and vans</li>
              <li>Older, discontinued models</li>
            </ul>
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col xs={12} lg={6} className="px-4 order-0 order-lg-0">
            <ImgCarCondition />
          </Col>
          <Col xs={12} lg={6} className="px-4 order-1 order-lg-1">
            <h3 className="text-dark">We Buy Any Condition</h3>

            <p className="lead">
              Totalled your car and can't get it to run? No problem, we'll send
              out a tow truck! No car is too damaged for us, so give us a call
              and find out how much it's worth.
            </p>
            <ul>
              <li>Damaged, small and large</li>
              <li>Broken, missing parts</li>
              <li>Totalled, not running</li>
              <li>Unwanted, just sitting around</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AnswersHome;
