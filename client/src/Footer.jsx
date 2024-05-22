import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import hallmarkk from "./assets/hallmarkk.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={6}>
            <p className="m-0">
              <img src={hallmarkk} alt="Hallmark" className="w-25" />
            </p>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <FaInstagram className="mx-3" size={24} />
            <FaTwitter className="mx-3" size={24} />
            <FaFacebook className="mx-3" size={24} />
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p className="container">
                        Hallmark Mystery |
                Hallmark Family |
                Hallmark Movies Now |
                About Us |
                Contact Us |
                FAQ |
                Careers |
                Advertising |
                International |
                Corporate |
                Press |
                Channel Locator |
                Newsletter |
                Privacy Policy |
                Terms of Use |
                CA Privacy Notice |
                CA Do Not Sell My Info |
                Cookie Preferences |
                Hallmark Cards |
          </p>
        </div>
        <div className="text-center mt-4">
          <p>Copyright © 2024 Hallmark Media, all rights reserved </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
