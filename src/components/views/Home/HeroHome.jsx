import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

import FormHomePage from '../../common/Forms/FormHomePage/FormHomePage';

const HeroHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query HeroHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/we-buy-junk-cars-angels-towing-junk-car-mass-massachusetts.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="John Grattan SEO & Web Design homepage background section - computer screen with SEO stats"
    >
      <Container id="home-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col xs={12} lg={8} className="align-self-center">
            <h1 className="px-sm-5 px-3 p-lg-3 mb-2 mb-lg-0 drop-shadow-darker font-weight-bold">
              We pay cash for junk cars
            </h1>
            <p className="px-sm-5 p-3 mb-3 mb-lg-0 drop-shadow-darker font-weight-bold">
              Call{' '}
              <a href="tel:+16179976510" className="text-primary">
                (617) 997-6510
              </a>{' '}
              to schedule a same day pickup. We are available 24/7!
            </p>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <FormHomePage />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default HeroHome;
