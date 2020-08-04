import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewBox from '../../ReviewBox/ReviewBox';
import ImgJessicaLynneDeck from '../../Images/Pages/Testimonials/img-jessica-lynne-deck';
import Button from '../../Button/Button';

const Home__ReviewsLynne = ({ className }) => {
  return (
    <section className="py-5 section-no-margin" id="home-reviews-section">
      <h2 className="text-white">5-Star Home Improvement Review</h2>
      <hr className="divider" />
      <Container className="p-1 p-lg-3 rounded my-3 drop-shadow">
        <Row noGutters className="p-3">
          <Col xs={12} lg={4} className="order-1 order-lg-1">
            <ImgJessicaLynneDeck />
          </Col>
          <Col xs={12} lg={8} className="order-2 order-lg-2 bg-light">
            <ReviewBox
              reviewImage={
                <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
              }
              reviewBody="Michael and his crews have been awesome to work with for our home improvements. They have been amazing at keeping the areas they have worked on clean when they leave for the day, they are fast, efficient, and we’re very happy with the work done so far. There were some snags with getting the lumber due to Covid-19, but Michael kept us informed along the way and was able to get every we needed. He had a solution to keep our project on track if he couldn’t, which was awesome. We even threw a couple extra projects on because they have been so easy to work with. Highly recommend giving Michael a call for any of your house projects."
              reviewName="Jessica Lynne"
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Button
          btnlink="/testimonials"
          btnlabel="Read More 5-Star Reviews"
          btn={true}
        />
      </Container>
    </section>
  );
};

export default Home__ReviewsLynne;
