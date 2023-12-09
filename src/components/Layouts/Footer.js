import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Location</h5>
              <p>No 221-A,</p>
              <p>Passara Road, badulla</p>
              <p>Sri Lanka</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Working days</h5>
              <p>Mon-Fri: 8.00AM - 10.00PM</p>
              <p>Saturday: 9.00AM - 10.00PM</p>
              <p>Sunday: 10.00AM - 9.00PM</p>
              <p>Poya Day Closed</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Orders Now</h5>
              <p>Place your order instantly now</p>
              <p>
                <Link to="tel:0777 123 256" className="calling">0777 123 456</Link></p>
              
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Follow Us</h5>
              <p>Order delicious meals online now.</p>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to="/">
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-twitter-x'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-youtube'></i>
                  </Link>
                </li>
              </ul>
              
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li>
                  <Link to="/">
                  © 2024 <span>BiteBlaze</span> All Rights Reserved
                  </Link>
                </li>
                <li>
                  <Link to="/">
                  About Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                  Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/">
                  Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
