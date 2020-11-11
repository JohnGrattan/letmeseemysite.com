import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormFooter = () => {
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    findUs: '',
  });

  const { fullName, phone, email, pickupLocation, findUs } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Container>
      <Form
        name="form-footer"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="border border-secondary rounded shadow mx-lg-0 p-2 p-md-5 bg-light"
        id="form-footer"
      >
        <p className="display-5 font-weight-bold text-secondary text-center mb-1 mt-4 mt-md-0">
          Contact Us Today
        </p>
        <hr className="divider pb-3 drop-shadow" />
        <input type="hidden" name="form-name" value="form-footer" />
        <Form.Group className="text-secondary" controlId="formFooterFullName">
          <Form.Control
            name="fullName"
            type="text"
            value={fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFooterPhone">
          <Form.Control
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFooterEmail">
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFooterPickupLocation">
          <Form.Control
            name="pickupLocation"
            type="text"
            value={pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            required
          />
        </Form.Group>
        <Form.Group controlId="formFooterFindUs">
          <Form.Control
            name="findUs"
            as="select"
            value={findUs}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              How Did You Find Us?
            </option>
            <option value="Facebook" className="bg-light">
              Facebook
            </option>
            <option value="Family/Friend">Family/Friend</option>
            <option value="Google/Bing" className="bg-light">
              Google/Bing
            </option>
            <option value="Referral">Referral</option>
            <option value="Website (Yellowpages, etc.)" className="bg-light">
              Directory (Yellowpages, etc.)
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Text className="text-danger small mb-3">* Required</Form.Text>
        <Form.Text className="text-muted small mb-3">
          Your information will never be shared with anyone else.
        </Form.Text>
        <div className="text-center mb-5 mb-md-0">
          <Button
            className="btn btn-xl drop-shadow mt-4"
            type="submit"
            value="Submit"
          >
            <span>Get My Cash</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

Form.defaultProps = {
  formname: `contact-form-footer`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormFooter;
