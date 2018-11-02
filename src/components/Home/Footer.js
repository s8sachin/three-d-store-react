import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import scapicLogo from './scapic.png';

class Footer extends Component {
  render() {
    return (
      <Container fluid className="app-footer">
        <Row>
          <Col xs={12} sm={4} md={4} lg={4}>
            <center>
              <a href="https://scapic.com" target="_blank" rel="noopener noreferrer"><img src={scapicLogo} alt="abc" className="footer-logo" /></a>
            </center>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <a className="social_links" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/scapic/">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="social_links" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/scapic/">
              <i className="fab fa-instagram" />
            </a>
            <a className="social_links mr-0" target="_blank" rel="noopener noreferrer" href="https://twitter.com/scapicxr">
              <i className="fab fa-twitter" />
            </a>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <span className="">Developed by <a href="https://github.com/s8sachin" className="developedBy">Sachin</a></span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
